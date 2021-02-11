import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-bottom: none;
  }

  .faq-title {
    border: none !important;
    background: none;
    padding: 0;
    outline: none !important;
    width: 100%;
    text-align: left;
    vertical-align: middle !important;
    cursor: pointer;

    font-weight: bold;

    padding-right: 72px;
    padding-left: 16px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      position: absolute;
      top: 12px;
      right: 36px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        transform: rotate(135deg);
      }
    }
  }

  .faq-content {
    padding: 16px 72px 32px 16px;
    line-height: 26px;
    text-align: left;
  }
`;
