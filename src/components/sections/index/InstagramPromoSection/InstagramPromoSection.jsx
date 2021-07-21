import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import s from './InstagramPromoSection.module.scss';

export const InstagramPromoSection = ({url}) => (
     <Section>
       <Wrapper>
         <h2 className={s.title}>Instagram</h2>
         <a href={url} target="_blank" className={s.subscribe} rel="noreferrer">Подписаться на нас</a>
       </Wrapper>
     </Section>
   );

