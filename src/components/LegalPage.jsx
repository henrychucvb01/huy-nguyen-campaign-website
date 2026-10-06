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
      
      <h2>FACULTY ASSOCIATION</h2>
      <p>
        Long Beach City College Faculty Association (LBCCFA) PAC maintains strict privacy policies,
        ensuring that the personal information of our users and members is not sold, rented,
        released, or traded to others without prior consent or a legal obligation. Personal
        information includes your name, email address, phone number, and other contact information.
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
      
      <h2>FACULTY ASSOCIATION</h2>
      <p>
        You agree to receive recurring automated text messages, including SMS and MMS messages,
        from Long Beach City College Faculty Association (LBCCFA) PAC. These messages may be sent
        using an automatic telephone dialing system to the mobile telephone number you provided
        when signing up or to another number that you designate.
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

      <h2>Support</h2>
      <p>
        For support regarding the Program, text “HELP” to the applicable Program’s Short Code or 
        long code or email us at votenguyen4lbcc@gmail.com. Please note that the use of 
        this email address, or texting “HELP” to the Program’s Short or long Code is not an acceptable 
        method of opting out of the program. Opt-outs must be submitted in accordance with the 
        procedures set forth above. Our Disclaimer of Warranty The Programs are offered on an "as-is" 
        basis and may not be available in all areas at all times and may not continue to work in the event of product, software, 
        coverage or other changes made by your wireless carrier. We will not be liable for any delays or failures 
        in the receipt of any mobile messages connected with any Program. Delivery of mobile messages is subject to 
        effective transmission from your wireless service provider/network operator, and is outside of our control. 
        We are not liable for delayed or undelivered mobile messages.
      </p>

      <h2>Privacy Policy</h2>
      <p>
        We respect your privacy. We will only use information you provide to transmit your mobile messages and 
        respond to you, if necessary. This includes sharing information with our program partners, message content 
        providers, phone companies, and vendors who assist us in the delivery of mobile messages. EXCEPT AS SET 
        FORTH IN THIS SECTION, WE DO NOT SELL, RENT, LOAN, TRADE, LEASE OR OTHERWISE TRANSFER FOR PROFIT ANY PHONE 
        NUMBERS OR CUSTOMER INFORMATION COLLECTED THROUGH PROGRAMS TO ANY THIRD PARTY. Nonetheless, we reserve the 
        right at all times to disclose any information as necessary to satisfy any law, regulation or governmental 
        request, to avoid liability, or to protect our rights or property. When you complete forms online or otherwise 
        provide us information in connection with a Program, you agree to provide accurate, complete, and true information. 
        You agree not to use a false or misleading name or a name that you are not authorized to use. If in our sole
        discretion, we believe that any such information is untrue, inaccurate, or incomplete, or you have opted into a 
        Program for an ulterior purpose, we may refuse you access to the Program and pursue any appropriate legal remedies. 
        This Privacy Policy and Terms and Conditions is strictly limited to these texting Programs and has no effect on any 
        other privacy policy(ies) that may govern the relationship between you and us in other contexts.
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
