export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <p className="footer-name">Huy “Henry” Nguyen</p>
            <p className="footer-office">LBCC Trustee</p>
          </div>
          <div className="footer-support">
            <p className="footer-support__heading">Support</p>
            <a href="tel:+15625905550">+1-562 590-5550</a>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/get-involved">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="#accessibility">Accessibility</a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p className="footer-disclaimer">
            Paid for by Huy Nguyen for LBCCD Trustee 2026<br />
            (ID #1484027)
          </p>
          <p id="accessibility">© 2026 Huy “Henry” Nguyen for LBCC Trustee</p>
        </div>
      </div>
    </footer>
  )
}
