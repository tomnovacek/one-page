import React from 'react';
import { Section, Container } from './global';
import Scroll from '../components/Scroll'
import FaqItem from './FaqItem';

const FAQS = [
  {
    title: 'Jak si domluvit setkání?',
    content: () => (
      <>
        Napište prosím email nebo sms. Ozvu zpět s navrženými termíny. Případně si naplánujte schůzky přímo v <Scroll type="id" element="schedule"><a href="#">kalendáři</a></Scroll>. 
      </>
    ),
  },
  {
    title: 'Jaká je cena sezení?',
    content: () => (
      <>
      Za individuální konzultaci v délce 50 minut zaplatíte 950 Kč. Službu je možno hradit v hotovosti nebo převodem na účet.<br/><br/>
      Tréninky a spolupráci ve firmách domlouvám s klienty individuálně.
      </>
    ),
  },
  {
    title: 'Hradí to zdravotní pojišťovna?',
    content: () => (
      <>
        Nespolupracuji se zdravotními pojišťovnami. Za moje služby platíte vy. I když je to pro Vás spojeno s vyššími náklady, má to i své výhody. Například není nutné předávat informace o průběhu terapie zdravotní pojišťovně. Také délku a frekvenci setkávání si můžeme domlouvat podle Vašich potřeb.
      </>
    ),
  },
  {
    title: 'Je možné se potkat online?',
    content: () => (
      <>
        Preferuji osobní setkání, pokud by Vám ale více vyhovovalo setkávat se online, je to po domluvě možné.
      </>
    ),
  },
  {
    title: 'Jak dlouho trvá terapie?',
    content: () => (
      <>
        Frekvence a délka setkávání je záležitost naší individuální domluvy. O předpokládané délce se můžeme pobavit na prvním setkání. Je ale samozřejmě možné po dohodě spolupráci prodloužit, nebo ukončit dříve.
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      {/* <h1>Frequently Asked Questions</h1> */}
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
