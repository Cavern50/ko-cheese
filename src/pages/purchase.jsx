import React from 'react';
import {Section} from "components/layout/Section/Section";

import { Wrapper } from 'components/layout/Wrapper/Wrapper';

import { OrderingSection } from 'components/sections/purchase/OrderingSection/OrderingSection';
import { CartSection } from 'components/sections/purchase/CartSection/CartSection';
import g from '../styles/Main.module.scss';

const Purchase = () => (
    <>
      <Section>
        <Wrapper>
          <div className={g.flex}>
            <OrderingSection />
            <CartSection />
          </div>
        </Wrapper>
      </Section>
    </>
  );

export default Purchase;