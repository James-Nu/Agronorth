import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/agronorth_llc/">@agronorth_llc</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Designed by{' '}
          <a href="https://kaadan-tech.com/">Kaadan-tech</a>.
        </span>
      </div>
    </footer>
  </div>
)
