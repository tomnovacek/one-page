/* import { Link } from 'gatsby' */
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Tom from '../assets/images/Tom.webp'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Faq from '../components/Faq'
import Scroll from '../components/Scroll'
import smartlookClient from 'smartlook-client'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  /*   componentDidMount () {
    const script = document.createElement("script")
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
    script.async = true;
    document.body.appendChild(script);
  } */

  render() {
    return (
      <Layout>
        <Helmet title="Tomáš Nováček - psycholog" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Vítejte,</h2>
                </header>
                <p>
                  Vystudoval jsem ekonomii a psychologii. První polovinu života
                  jsem získával zkušenosti v podnikovém prostředí, posledních šest let se věnuji psychologii. Absolvoval jsem dvouletý výcvik v
                  koučinku a aktuálně jsem v pětiletém výcviku{' '}
                  <a href="https://www.psychoterapie-integrace.cz/">
                    integrace v psychoterapii
                  </a>
                  . Pracuji pro firmy i jednotlivce řešící pracovní i osobní
                  problémy, se kterými chtějí pomoct. Rád se setkám i s vámi.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Více
                    </Link>
                  </li>
                </ul> */}
                <div>
                  <ul className="actions">
                    <li>
                      <button className="color-button cta">
                        <a href="#schedule">Rezervujte si termín</a>
                      </button>
                    </li>
                    <li>
                      <button className="button">
                        <a href="#contact">Kontaktujte mě</a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="image">
                <img src={Tom} alt="" />
              </span>
            </div>
          </section>

          {/* Moje sluzby*/}

          <section id="first" className="main special">
            <header className="major">
              <h2>Moje služby</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-user"></span>
                <h3>Psychoterapie</h3>
                <p>
                  Ať už stojíte před složitým životním rozhodnutím, řešíte
                  vztahové, nebo osobní problémy, procházíte složitým životním
                  obdobím a hledáte pomoc. Ozvěte se.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-diamond"></span>
                <h3>Koučování</h3>
                <p>
                  Pokud chcete pracovat na tom, aby se vám v osobním životě i
                  práci dařilo lip a chcete s tím systematicky pomoct. Ozvěte
                  se.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-users"></span>
                <h3>Tréninky</h3>
                <p>
                  Pokud chcete rozvíjet u svého týmu dovednosti v oblasti
                  komunikace, zvládání stresu, vytváření tvůrčího prostředí.
                  Ozvěte se.
                </p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          {/* <section id="second" className="main special">
            <header className="major">
              <h2>Jak pracuji</h2>
              <p>
                Považuji za důležité věnovat dostatek prostoru pro definování
                zakázky.
                <br />
                Obvykle pozoruji s klienty následovně:
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-envelope"></span>
                <strong>1</strong>{' '}
                <a href="#footer">První kontakt, domluva setkání</a>
              </li>
              <li className="style2">
                <span className="icon fa-question"></span>
                <strong>2</strong> První setkání, kontrakt
              </li>
              <li className="style3">
                <span className="icon fa-pencil"></span>
                <strong>3</strong> Domluva spolupráce
              </li>
              <li className="style4">
                <span className="icon fa-refresh"></span>
                <strong>4</strong> Společná práce
              </li>
              <li className="style5">
                <span className="icon fa-question"></span>
                <strong>5</strong> Ukončení, další kroky
              </li>
            </ul>
            <p className="content">
              V současné situaci se setkávám s klienty pouze online. I když tato
              forma úplně nenahradí osobní kontakt, mám zkušenost, že i online
              setkání může být pro většinu lidí užitečná.
            </p>
          </section> */}

          <section id="cta" className="main special">
            <header className="major">
              <h2>Nejčastější dotazy</h2>
              <Faq />
            </header>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="schedule" className="main special">
            <header className="major">
              <h2>Naplánovat setkání</h2>
              <p>
                Vyberte z kalendáře čas, který vám bude nejvíce vyhovovat. V
                následujícím formuláři doplníte jen jméno a email. Nebo můžete
                také poslat&nbsp;
                <Scroll type="id" element="contact">
                  <a href="#">
                    <strong>mail nebo sms</strong>
                  </a>
                </Scroll>
                .
              </p>
            </header>

            <div>
              <iframe
                title="calendar"
                className="content"
                src="https://meetings.hubspot.com/mail249?embed=true"
                width="100%"
                height="670"
              ></iframe>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
  componentDidMount() {
    smartlookClient.init('d165dc10f16a7da507933c2950cd1dd7f22a0b8f')
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
  }
}

export default Index
