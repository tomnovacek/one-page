import React from 'react';

import { Section, Container } from './global';

import DetailItem from './DetailItem';

const FAQS = [
  {
    title: 'Objednaní',
    content: () => (
      <>
        Ideální je rezervovat si čas přes rezervační systém, napsat email, nebo sms. V případě emailu, nebo sms, se vám ozvu zpět s navrženými termíny. V případě online rezervace si vyberete termín, který vám vyhovuje přímo z kalendáře.
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
