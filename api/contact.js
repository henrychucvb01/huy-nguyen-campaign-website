const interestLabels = {
  volunteer: 'Volunteer',
  canvass: 'Canvass',
  'phone-bank': 'Phone bank',
  'host-event': 'Host an event',
  fundraising: 'Help with fundraising',
  'yard-sign': 'Yard sign',
  endorse: 'Endorse Huy Nguyen',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const submissionIdPattern = /^[a-zA-Z0-9-]{16,128}$/

function cleanString(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function sendJson(response, status, body) {
  response.status(status).json(body)
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return sendJson(response, 405, { error: 'Method not allowed.' })
  }

  let body
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body ?? {}
  } catch {
    return sendJson(response, 400, { error: 'Invalid request body.' })
  }
  const firstName = cleanString(body.firstName, 80)
  const lastName = cleanString(body.lastName, 80)
  const email = cleanString(body.email, 254)
  const phone = cleanString(body.phone, 40)
  const zipCode = cleanString(body.zipCode, 10)
  const message = cleanString(body.message, 5000)
  const submissionId = cleanString(body.submissionId, 128)
  const interests = Array.isArray(body.interests)
    ? [...new Set(body.interests)].filter((interest) => interestLabels[interest])
    : []

  if (!firstName || !lastName || !emailPattern.test(email)) {
    return sendJson(response, 400, { error: 'Please provide a valid first name, last name, and email.' })
  }

  if (zipCode && !/^\d{5}(-\d{4})?$/.test(zipCode)) {
    return sendJson(response, 400, { error: 'Please provide a valid ZIP code.' })
  }

  if (!submissionIdPattern.test(submissionId)) {
    return sendJson(response, 400, { error: 'Invalid submission identifier.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL
  const sender = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !recipient || !sender) {
    console.error('Contact email environment variables are not configured.')
    return sendJson(response, 503, { error: 'The contact form is temporarily unavailable. Please try again later.' })
  }

  const selectedInterests = interests.length
    ? interests.map((interest) => interestLabels[interest])
    : ['None selected']
  const subject = `New Get Involved Submission - ${firstName} ${lastName}`
  const fields = [
    ['First Name', firstName],
    ['Last Name', lastName],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
    ['ZIP Code', zipCode || 'Not provided'],
    ['Message', message || 'Not provided'],
    ['Involvement Options', selectedInterests.join(', ')],
  ]
  const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n\n')
  const html = fields
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll('\n', '<br>')}</p>`)
    .join('')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `get-involved/${submissionId}`,
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text,
        html,
      }),
    })

    if (!resendResponse.ok) {
      console.error(`Resend request failed with status ${resendResponse.status}.`)
      return sendJson(response, 502, { error: 'Your message could not be sent. Please try again.' })
    }

    return sendJson(response, 200, { ok: true })
  } catch (error) {
    console.error('Contact form delivery failed.', error instanceof Error ? error.message : 'Unknown error')
    return sendJson(response, 502, { error: 'Your message could not be sent. Please try again.' })
  }
}
