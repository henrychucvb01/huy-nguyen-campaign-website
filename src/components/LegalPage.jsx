import '../legal-page.css'

const campaignName = 'Huy Nguyen for LBCCD Trustee 2026 (ID #1484027)'
const effectiveDate = 'October 1, 2026'

function PrivacyPolicy() {
  return (
    <>
      <p>
        {campaignName} maintains strict privacy policies, ensuring that the personal information of
        our users and members is not sold, rented, released, or traded to others without prior
        consent or a legal obligation. Personal information includes your name, email address,
        phone number, and other contact information.
      </p>

      <h2>SMS Opt-Out</h2>
      <p>
        If you are receiving text messages from us and wish to stop receiving them, simply respond
        with “STOP” to the number from which you received the message. Once we receive your
        message, you will no longer receive further text messages from that number.
      </p>

      <h2>Mobile Information</h2>
      <p>
        Mobile information will not be shared with third parties or affiliates for marketing or
        promotional purposes. Text-message originator opt-in data and consent will not be shared
        with any third parties, except service providers that help us operate our messaging program
        or when disclosure is required by law.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions regarding this policy may be submitted through our{' '}
        <a href="/get-involved">contact page</a> or by calling{' '}
        <a href="tel:+15625905550">562-590-5550</a>.
      </p>
    </>
  )
}

function TermsAndConditions() {
  return (
    <>
      <p>
        You agree to receive recurring automated text messages, including SMS and MMS messages,
        from {campaignName}. These messages may be sent using an automatic telephone dialing
        system to the mobile telephone number you provided when signing up or to another number
        that you designate.
      </p>
      <p>
       The types of messages you may receive include marketing, informational and donation requests. 
        Donations may be solicited. This shall all be known collectively as the “Programs." 
        Consent to receive automated marketing text messages is not a condition of any purchase or contribution.
      </p>

      <h2>Cost</h2>
      <p>
        Message and data rates may apply. Please consult with your wireless carrier for rate
        information.
      </p>

      <h2>Message Frequency</h2>
      <p>
        Message frequency will vary. We reserve the right to alter the frequency of messages sent
        at any time, including increasing or decreasing the total number of messages. We also
        reserve the right to change the telephone number or short code from which messages are
        sent. Not all mobile devices or handsets may be supported, and messages may not be
        deliverable in all areas. Our service providers and the mobile carriers supported by the
        Programs are not liable for delayed or undelivered messages.
      </p>

      <h2>Cancellation</h2>
      <p>
        If you do not wish to continue participating in a Program or no longer agree to these
        Terms, text the applicable short code or regular long-code telephone number, or directly
        reply to any mobile message received from a Program, with STOP, END, CANCEL, UNSUBSCRIBE,
        or QUIT to opt out of that Program at any time. You may receive one additional mobile
        message confirming your decision to opt out.
      </p>
      <p>
        You understand and agree that the options described above are the only reasonable and
        exclusive methods of opting out. Other methods, including texting words or phrases not
        listed above or verbally requesting removal, may not be recognized as a valid opt-out
        request. You may be subscribed to multiple Programs using different short codes or regular
        long-code telephone numbers. You must separately text or reply STOP to each number from
        which you wish to unsubscribe.
      </p>

      <h2>Help</h2>
      <p>
        For assistance, reply HELP to the number from which you received a message, visit our{' '}
        <a href="/get-involved">contact page</a>, or call{' '}
        <a href="tel:+15625905550">562-590-5550</a>.
      </p>

      <h2>Privacy</h2>
      <p>
        Please review our <a href="/privacy-policy">Privacy Policy</a> for information about how we
        collect, use, and protect personal information.
      </p>
    </>
  )
}

export default function LegalPage({ type }) {
  const isPrivacy = type === 'privacy'

  return (
    <main className="legal-page">
      <article className="legal-page__content">
        <p className="eyebrow">Huy “Henry” Nguyen for LBCC Trustee</p>
        <h1>{isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}</h1>
        <p className="legal-page__effective">Effective date: {effectiveDate}</p>
        {isPrivacy ? <PrivacyPolicy /> : <TermsAndConditions />}
      </article>
    </main>
  )
}
