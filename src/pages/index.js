import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Tom from '../assets/images/Tom.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Faq from '../components/Faq'
import Scroll from '../components/Scroll';

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
                  <h2>Hezký den,</h2>
                </header>
                <p>
                  Vystudoval jsem ekonomii a psychologii. První polovinu života jsem strávil jako ekonom, druhou věnuji psyhologii. Absolvoval jsem výcvik v koučinku a aktuálně jsem ve výcviku <a href="https://www.psychoterapie-integrace.cz/">integrace v psychoterapii</a>. Pracuji pro firmy i jednotlivce řešící pracovní i osobní problémy, se kterými chtějí pomoct. Rád se setkám i s vámi.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Více
                    </Link>
                  </li>
                </ul>
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
                Ať už stojíte před složitým životním rozhodnutím, řešíte vztahové, nebo osobní problémy, procházíte složitým životním obdobím a hledáte pomoc. Ozvěte se.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-diamond"></span>
                <h3>Koučování</h3>
                <p>
                Pokud chcete pracovat na tom, aby se vám v osobním životě i práci dařilo lip a chcete s tím systematicky pomoct. Ozvěte se.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-users"></span>
                <h3>Tréninky</h3>
                <p>
                Pokud chcete rozvíjet u svého týmu dovednosti v oblasti komunikace, zvládání stresu, vytváření tvůrčího prostředí. Ozvěte se.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Jak pracuji</h2>
              <p>
                Považuji za důležité věnovat dostatek prostoru pro definování zakázky.
                <br />
                Obvykle pozoruji s klienty následovně:
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-envelope"></span>
                <strong>1</strong> <a href="#footer">První kontakt</a>
              </li>
              <li className="style2">
                <span className="icon fa-question"></span>
                <strong>2</strong> První setkání
              </li>
              <li className="style3">
                <span className="icon fa-pencil"></span>
                <strong>3</strong> Domluva spolupráce
              </li>
              <li className="style4">
                <span className="icon fa-refresh"></span>
                <strong>4</strong> Spolupráce
              </li>
              <li className="style5">
                <span className="icon fa-question"></span>
                <strong>5</strong> Domluva na dalším postupu
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Nejčaštější dotazy</h2>
            <Faq />
            </header>
            <footer className="major">
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
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
