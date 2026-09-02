import { useState } from 'react'
import CampaignLogo from './CampaignLogo'

const links = [
  ['About Huy', '#about'],
  ['3 F’s', '#three-fs'],
  ['Experience', '#experience'],
  ['Endorsements', '#endorsements'],
  ['Get Involved', '#get-involved'],
  ['News', '#news'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <CampaignLogo />
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`site-nav${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="button button--red button--small" href="#get-involved" onClick={closeMenu}>
          Donate
        </a>
      </nav>
    </header>
  )
}
