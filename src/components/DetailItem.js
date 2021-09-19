import React from 'react';
import Collapsible from 'react-collapsible';

import { DetailWrapper } from './style';

const DetailItem = ({ title, children }) => (
  <DetailWrapper>
    <Collapsible
      className="detail"
      openedClassName="detail active"
      triggerClassName="detail-title"
      triggerOpenedClassName="detail-title active"
      triggerTagName="button"
      contentInnerClassName="detail-content"
      trigger={title}
      transitionTime={300}
      easing="ease-out"
    >
      {children}
    </Collapsible>
  </DetailWrapper>
);

export default DetailItem;
