import { Link } from 'gatsby'
import React from 'react'
import CAP from '../assets/images/CAP.png'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Jak mě kontaktovat</h2>
      <p>
        Rád se s vámi setkám. Domluvte si se mnou schůzku přes rezervační systém, emailem nebo pošlete sms. Pokud Vám nebudu moci zvednout telefon, ozvu se hned, jak to bude možné.
      </p>
      <img src={CAP} alt="CAP logo" width='250' style={{marginTop:'-40px', display:'block', marginLeft:'auto', marginRight:'auto'}} className='center'/>
    </section>
    <section>
      <h2 id="contact">Kontakt</h2>
      <dl className="alt">
        <dt>Jméno</dt>
        <dd>Mgr. Ing. Tomáš Nováček</dd>
        {/* <dt>Místo</dt>
        <dd><a href="https://terapienapekarske.cz" target="_blank">Terapie na Pekařské</a></dd> */}
        <dt>Adresa</dt>
        <dd><a href="https://maps.app.goo.gl/EFwBjA4NRo9f6M6p8" target="_blank">Sukova 4</a> &bull; Brno</dd>
        <dt>Mobil</dt>
        <dd>(+420) 602 773 440 (preferuji sms)</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:terapie@tomasnovacek.com">terapie@tomasnovacek.com</a>
        </dd>
      </dl>
      {/* <ul className="icons">
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
      </ul> */}
    </section>
    <p className="copyright">
      &copy; Všechna práva vyhrazena.
    </p>
  </footer>
)

export default Footer
