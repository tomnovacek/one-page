import React from 'react';

import { Section, Container } from './global';

import FaqItem from './FaqItem';

const FAQS = [
  {
    title: 'Jak si domluvit setkání?',
    content: () => (
      <>
        Ideální je rezervovat si čas přes rezervační systém, napsat email, nebo sms. V případě emailu, nebo sms, se vám ozvu zpět s navrženými termíny. V případě online rezervace si vyberete termín, který vám vyhovuje přímo z kalendáře.
      </>
    ),
  },
  {
    title: 'Jaký je ceník služeb?',
    content: () => (
      <>
        <table style={{textAlign:"left"}}>
          <tr>
            <th>Služba</th>
            <th>Cena / 50 minut</th>
          </tr>
          <tr>
            <td>
              Individuální konzultace
            </td>
            <td>
              750 Kč
            </td>
          </tr>
          <tr>
            <td>
              Párová nebo rodinná konzultace
            </td>
            <td>
              900 Kč
            </td>
          </tr>
        </table>
        <p>Tréninky a spolupráci ve firmách domlouvám s klienty individuálně. Pokud se dohodneme na setkání vna jiném místě, je k ceně připočítána cena za dopravu.</p>
      </>
    ),
  },
  {
    title: 'Je možné se potkat online?',
    content: () => (
      <>
        Aktuálně vlastně jen online. I za běžných podmínek jsem otevřen online setkání.
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
