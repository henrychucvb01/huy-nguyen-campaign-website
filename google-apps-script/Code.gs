const SPREADSHEET_ID = '1WnNMPqKfMzFJCndXay7KEbdzALL9z4fC8KEuzLlYs6I'
const SHEET_NAME = 'Submissions'
const HEADERS = [
  'Submitted At',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'ZIP Code',
  'Message',
  'Interests',
  'SMS Text Consent',
]

const ALLOWED_INTERESTS = new Set([
  'volunteer',
  'canvass',
  'phone-bank',
  'host-event',
  'fundraising',
  'yard-sign',
  'endorse',
])

function doPost(event) {
  try {
    const params = event && event.parameters ? event.parameters : {}
    const first = (name) => {
      const values = params[name]
      if (values && values.length) return String(values[0]).trim()
      const value = event && event.parameter ? event.parameter[name] : ''
      return value == null ? '' : String(value).trim()
    }

    // Quietly discard automated submissions that fill the hidden honeypot field.
    if (first('website')) return resultPage(true, 'Thank you. Your information was received.')

    const firstName = clean(first('firstName'), 80)
    const lastName = clean(first('lastName'), 80)
    const email = clean(first('email'), 254)
    const phone = clean(first('phone'), 40)
    const zipCode = clean(first('zipCode'), 10)
    const message = clean(first('message'), 5000)
    const smsConsent = first('smsConsent') === 'on' ? 'Yes' : 'No'
    const interests = (params.interests || [])
      .map((interest) => clean(String(interest), 40))
      .filter((interest) => ALLOWED_INTERESTS.has(interest))

    if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return resultPage(false, 'Please enter your first name, last name, and a valid email address.')
    }

    if (zipCode && !/^\d{5}(-\d{4})?$/.test(zipCode)) {
      return resultPage(false, 'Please enter a valid ZIP code.')
    }

    const lock = LockService.getScriptLock()
    lock.waitLock(10000)
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
      let sheet = spreadsheet.getSheetByName(SHEET_NAME)
      if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME)

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS)
        sheet.setFrozenRows(1)
      }

      sheet.appendRow([
        new Date(),
        safeCell(firstName),
        safeCell(lastName),
        safeCell(email),
        safeCell(phone),
        safeCell(zipCode),
        safeCell(message),
        safeCell(interests.join(', ')),
        smsConsent,
      ])
    } finally {
      lock.releaseLock()
    }

    return resultPage(true, 'Thank you. Your information was received.')
  } catch (error) {
    console.error(error)
    return resultPage(false, 'We could not save your information. Please try again later.')
  }
}

function clean(value, maxLength) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLength)
}

// Prevent submitted text from being interpreted as a spreadsheet formula.
function safeCell(value) {
  const text = String(value || '')
  return /^[=+@-]/.test(text) ? "'" + text : text
}

// The website listens for this message from its hidden iframe; visitors stay on the site.
function resultPage(ok, message) {
  const payload = JSON.stringify({
    type: 'huy-campaign-form-result',
    ok,
    message,
  })

  return HtmlService.createHtmlOutput(
    '<!doctype html><html><head><meta charset="utf-8"></head><body><script>' +
      'window.parent.postMessage(' + payload + ', "*");' +
      '</script></body></html>'
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
