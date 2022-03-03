import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Jak mě kontaktovat</h2>
      <p>
        Rád se s vámi setkám. Domluvte si se mnou schůzku přes rezervační systém, emailem nebo pošlete sms. Pokud Vám nebudu moci zvednout telefon, ozvu se hned, jak to bude možné.
      </p>
      
    </section>
    <section>
      <h2 id="contact">Kontakt</h2>
      <dl className="alt">
        <dt>Jméno</dt>
        <dd>Mgr. Ing. Tomáš Nováček</dd>
        <dt>Místo</dt>
        <dd><a href="https://terapienapekarske.cz" target="_blank">Terapie na Pekařské</a></dd>
        <dt>Adresa</dt>
        <dd><a href="https://www.google.com/maps/place/Peka%C5%99sk%C3%A1+18,+602+00+Brno-st%C5%99ed/@49.1922827,16.6001328,17z/data=!3m1!4b1!4m5!3m4!1s0x471294518ea60565:0x80cc691cb4fc68d6!8m2!3d49.1922792!4d16.6023215" target="_blank">Pekařská 18</a> &bull; Brno</dd>
        <dt>Mobil</dt>
        <dd>(+420) 602 773 440 (preferuji sms)</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:mail@tomasnovacek.com">mail@tomasnovacek.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/tomnovacek"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/novacek-tom" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tomnovacek"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Všechna práva vyhrazena.
    </p>
  </footer>
)

export default Footer
