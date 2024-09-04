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
        <dd><a href="https://www.google.com/maps/place/Mgr.+Tom%C3%A1%C5%A1+Nov%C3%A1%C4%8Dek+-+psycholog+a+terapeut/@49.1929206,16.6065178,17z/data=!4m9!1m2!2m1!1stomas+novacek,+orli!3m5!1s0x471295d6e35ec40f:0x40a3ee641541c87e!8m2!3d49.1938495!4d16.6121573!15sChN0b21hcyBub3ZhY2VrLCBvcmxpkgEPcHN5Y2hvdGhlcmFwaXN04AEA" target="_blank">Orlí 20</a> &bull; Brno</dd>
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
