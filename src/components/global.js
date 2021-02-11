import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 28px 0;
  overflow: hidden;

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;
