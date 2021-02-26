import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Connect with us on {' '}
      <a href="https://instagram.com/agronorth_llc/">Instagram , </a>
      <a href="https://web.facebook.com/agronorth1"> Facebook  </a> or 
      <a href="https://www.linkedin.com/company/75732946/admin/"> Linkedin </a>
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
