import React from 'react';

import { Section, Container } from './global';

import DetailItem from './DetailItem';

const FAQS = [
  {
    title: 'První setkání',
    content: () => (
      <>
        <p>První setkání slouží k seznámení. Obvykle se bavíme o Vaší aktuální situaci, o Vašem životním příběhu, rodině a dalších souvislostech. Vysvětlujeme nejasnosti a zkoušíme si, jak Vám vyhovuje můj způsob práce. <br/>
        Pokud dospějeme k závěru, že by spolupráce pro Vás mohla být prospěšná, domlouváme frekvenci setkávání a orientační délku a podmínky spolupráce.</p>
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
          <DetailItem title={title} key={title}>
            {content()}
          </DetailItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
