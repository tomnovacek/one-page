/* import { Link } from 'gatsby' */
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Tom from '../assets/images/TomBlob.png'
import ThumbsUp from '../assets/images/thumbsUp.png'
import Puzzle from '../assets/images/puzzle.png'
import Tailor from '../assets/images/tailor.png'
import Dialog from '../assets/images/dialog.png'
import CAP from '../assets/images/CAP.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Faq from '../components/Faq'
import ArrangeMeeting from '../components/ArrangeMeeting'
import FirstMeeting from '../components/FirstMeeting'
import Cooperation from '../components/Cooperation'
import Ending from '../components/Ending'
import Scroll from '../components/Scroll'
/* import smartlookClient from 'smartlook-client' */

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
        <Helmet title="Tomáš Nováček - psycholog, kouč, psychoterapeut" />

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
                  Jsem psycholog, kouč a psychoterapeut. Vystudoval jsem ekonomii a jednooborovou psychologii. Posledních sedm let se věnuji převážně psychologickému poradenství a tři roky také psychoterapii. Absolvoval jsem dvouletý výcvik v
                  koučinku a aktuálně jsem v pětiletém výcviku{' '}
                  <a href="https://www.psychoterapie-integrace.cz/" target="_blank">
                    integrace v psychoterapii
                  </a>. Jsem kandidátním členem <a href='https://czap.cz/' target='_blank'> České asociace pro psychoterapii</a>, která sdužuje psychoterapeuty ctící etické zásady a splňující kvalifikační předpoklady psychoterapeutické práce. 
                </p>
                <p>
                  Setkávám se s klienty ve své soukromé praxi. Spolupracuji také s firmami na individuálních rozvojových programech pro jejich zaměstnance. Témata, kterým se nejčastěji věnujeme jsou vztahové problémy, úzkosti, psychosomatické obtíže, nízké sebevědomí, osobní rozvoj a budování funkčních návyků.
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
                    <Scroll type="id" element="schedule">
                      <button className="color-button cta">
                        <a href="#">Rezervujte si termín</a>
                      </button>
                    </Scroll>
                    </li>
                    <li>
                    <Scroll type="id" element="contact">
                      <button className="button">
                        <a href="#">Kontaktujte mě</a>
                      </button>
                    </Scroll>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img src={Tom} alt="Thumbs up" width='100%' className='' style={{padding:'0 1rem', maxWidth:'500px'}}/>
              </div>
              {/* <img src={CAP} alt="CAP logo" width='300'/> */}
            </div>
          </section>

          {/* Moje sluzby*/}

          <section id="first" className="main special">
            <header className="major">
              <h2>Moje služby</h2>
            </header>
            <ul className="features">
              <li>
                {/* <span className="icon major style1 fa-user"></span> */}
                <h3>Psychoterapie</h3>
                <p>
                  Ať už stojíte před složitým životním rozhodnutím, řešíte
                  vztahové, nebo osobní problémy, procházíte náročným životním
                  obdobím a hledáte pomoc,&nbsp;
                  <Scroll type="id" element="schedule">
                    <a href="#">můžete se na mě obrátit.</a>
                  </Scroll>
                </p>
              </li>
              <li>
                {/* <span className="icon major style3 fa-diamond"></span> */}
                <h3>Koučování a poradenství</h3>
                <p>
                  Pokud chcete pracovat na tom, aby se vám v osobním životě i
                  práci dařilo lépe a chcete s tím systematicky pomoct,&nbsp;
                  <Scroll type="id" element ="schedule">
                    <a href="#">naplánujte si se mnou schůzku.</a> 
                  </Scroll>
                </p>
              </li>
              {/* <li>
                <span className="icon major style5 fa-users"></span>
                <h3>Tréninky</h3>
                <p>
                  Pokud chcete rozvíjet u svého týmu dovednosti v oblasti
                  komunikace, zvládání stresu, vytváření tvůrčího prostředí,&nbsp;
                  <Scroll type="id" element="contact">
                    <a href="#">napište mi.</a>
                  </Scroll>
                </p>
              </li> */}
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

          <section id="second" className="main special">
            <header className="major">
              <h2>Jak pracuji</h2>
            </header>
              <div className='content'>
              <p>
                Ve své práci vycházím z přesvědčení, že všichni lidé mají schopnosti zvládat obtíže, se kterými se setkají. Občas se ale může stát, že se člověk na nějakém problému zasekne. V takových situacích klienty doprovázím při zkoumání, jak komplikovaným situacím porozumět a úspěšně čelit. Stavím na respektu k odlišnostem mezi lidmi, proto s každým klientem postupuji trochu jinak. Vydávám se s klientem po jeho jedinečné cestě k sebepoznání. Společně objevujeme a upevňujeme jeho zdroje, na kterých může stavět, aby se mu žilo líp.
              </p>
              <p>
                Výcvik v kognitivně behaviorálním koučinku a především probíhající výcvik v integrativní psychoterapii definují základní rámec a metody mé práce. Podrobněji následující body probírám s klienty na prvním setkání.
              </p>
              </div>
            
            <ul className="principles">
              <li>
              <h3> Přijetí</h3>
              <span className="image">
                <img src={ThumbsUp} alt="Thumbs Up foto" />
              </span>
              <p>Snažím se pro klienty vytvářet prostředí, ve kterém jsou přijímáni a cítí se bezpečně.</p>
                <p className="source">Photo by <a href="https://unsplash.com/@sincerelymedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sincerely Media</a> on <a href="https://unsplash.com/s/photos/thumbs-up?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
              </li>

              {/* <li>
                <h3> Celostní přístup</h3>
              <span className="image">
                <img src={Puzzle} alt="Puzzle" />
              </span>
              <p>Snažím se s klienty uvědomit si a pochopit situaci v celé své komplexnosti. Důležité je neopomenout žádnou část skládačky.</p>
              <p className="source">Photo by <a href="https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sigmund</a> on <a href="https://unsplash.com/s/photos/puzzle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
              </li> */}
              <li>
              <h3> Terapie na míru</h3>
              <span className="image">
                <img src={Tailor} alt="Tailoring" />
              </span>
              <p>Jedinečnost každého člověka je pro důvodem k hledání jedinečného přístupu.</p>
              <p className="source">Photo by <a href="https://unsplash.com/@salvadorgodoyladrero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Salvador Godoy</a> on <a href="https://unsplash.com/s/photos/tailor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
              </li>

              <li>
              <h3>Mezilidský dialog</h3>
              <span className="image">
                <img src={Dialog} alt="Dialog" />
              </span>
              <p>Bavíme se o s klienty tom jak nejlépe využít toho co už mají k tomu, aby se jim žilo lépe.</p>
              <p className="source">Photo by <a href="https://unsplash.com/@harlimarten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Harli  Marten</a> on <a href="https://unsplash.com/s/photos/people-talking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
              </li>
            </ul>
        {/*       <h2>
                Spolupráce obvykle probíhá v následujících krocích:
              </h2>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-calendar-check-o"></span>
                <strong>1</strong>{' '}
                <ArrangeMeeting />
              </li>
              <li className="style2">
                <span className="icon fa-question"></span>
                <strong>2</strong> <FirstMeeting/>
              </li>
              <li className="style3">
                <span className="icon fa-refresh"></span>
                <strong>3</strong> <Cooperation/>
              </li>
              <li className="style4">
                <span className="icon fa-check"></span>
                <strong>4</strong> <Ending />
              </li>
            </ul> */}
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Nejčastější dotazy</h2>
              <p>Níže je seznam nejšastějších otázek a odpovědí.<br/>Jestli Vám zde chybí důležitá informace, <a href="mailto:mail@tomasnovacek.com">kontaktujte mě prosím</a>.</p>
            </header>
              <Faq />
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
            </header>
              <p>
                Vyberte si z kalendáře datum a čas, které vám budou nejvíce vyhovovat. V následujícím formuláři doplníte jen Vaše jméno a kontaktní email, kam Vám přijde potvrzení.<br/>Můžete mi také poslat&nbsp;
                <Scroll type="id" element="contact">
                  <a href="#">
                    <strong>mail nebo sms</strong>
                  </a>
                </Scroll>
                . Odepíši Vám s návrhy termínů možných setkání.
              </p>

            <div>
              {/* <iframe
                title="calendar"
                className="content"
                src="https://meetings-eu1.hubspot.com/tomas-novacek"
                width="100%"
                height="670"
              ></iframe>  */}
             {/*  <iframe frameborder='0' height='600px' scrolling='yes' src='https://reservatic.com/cs/public_services/tomas-novacek-online-individualni-konzultace/calendar?no_select_place=true&place_id=9173' width='100%'></iframe> */}              
             {/* inserted reservanto code */}
            <div  
            title="reservanto"
            style={{maxWidth: "80%", height:"650px", margin:"auto"}}
            className="reservanto-iframe" data-id="18303" data-serviceid="59303" data-resourceid="25712" 
            >
            </div>
            {/* end of inserted reservanto code */}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://booking.reservanto.cz/Script/reservanto-iframe.js'
    script.async = true
    document.body.appendChild(script)
    /* smartlookClient.init('d165dc10f16a7da507933c2950cd1dd7f22a0b8f') */
  }
}

export default Index
