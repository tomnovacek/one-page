import React from 'react';

import { Section, Container } from './global';

import DetailItem from './DetailItem';

const FAQS = [
  {
    title: 'Ukončování',
    content: () => (
      <>
        Na ukončování se s klientem obvykle domlouváme v situaci, kdy dospějeme k názoru, že situaci zvládá sám. Věnujeme této fázi dostatek prostoru.
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      {/* <h1>Frequently Asked Questions</h1> */}
      <div style={{color:"white"}}>
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
