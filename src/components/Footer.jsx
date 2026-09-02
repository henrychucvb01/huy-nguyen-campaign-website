export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <p className="footer-name">Huy “Henry” Nguyen</p>
            <p className="footer-office">LBCC Trustee</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#accessibility">Accessibility</a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p id="privacy">FPPC and campaign disclaimer placeholder.</p>
          <p id="accessibility">© 2026 Huy “Henry” Nguyen for LBCC Trustee</p>
        </div>
      </div>
    </footer>
  )
}
