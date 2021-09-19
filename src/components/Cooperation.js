import React from 'react';

import { Section, Container } from './global';

import DetailItem from './DetailItem';

const FAQS = [
  {
    title: 'Spolupráce',
    content: () => (
      <>
        V domluveném frekvenci a rozsahu se setkáváme. V případě potřeby je možné se potkávat častěji, nebo změnit délku spolupráce. Obvykle se s klienty setkávám v týdenním až čtrnáctidenním intervalu.
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
