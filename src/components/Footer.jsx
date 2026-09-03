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
            <a href="mailto:info@votenguyen4lbcc.com">info@votenguyen4lbcc.com</a>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="mailto:info@votenguyen4lbcc.com">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#accessibility">Accessibility</a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p className="footer-disclaimer" id="privacy">
            Paid for by Huy Nguyen for LBCCD Trustee 2026<br />
            (ID #1484027)
          </p>
          <p id="accessibility">© 2026 Huy “Henry” Nguyen for LBCC Trustee</p>
        </div>
      </div>
    </footer>
  )
}
