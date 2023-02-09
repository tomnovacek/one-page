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
    padding: 0px;
    outline: none !important;
    width: 100%;
    font-size: 1.1em;
    text-align: left;
    vertical-align: middle !important;
    cursor: pointer;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;

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
    padding: 16px 72px 32px 32px;
    line-height: 32px;
    text-align: left;
    font-size: 1em;
  }
  `;

  export const DetailWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .detail {
    border-bottom: none;
  }
  .detail-title {
    border: none !important;
    color: white !important;
    font-size: inherit;
    background: none;
    padding: 0;
    outline: none !important;
    width: 100%;
    text-align: center;
    vertical-align: middle !important;
    cursor: pointer;

    padding-right: 24px;
    padding-left: 8px;
    position: relative;

    &::after {
      content: '';
      color: white;
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      position: absolute;
      top: 12px;
      right: 16px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        transform: rotate(135deg);
      }
    }
  }

  .detail-content {
    padding: 8px;
    line-height: 26px;
    text-align: left;
  }
`;
