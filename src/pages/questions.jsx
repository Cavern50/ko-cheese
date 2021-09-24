import React from 'react';
import { Section } from 'components/layout/Section/Section';
import { Wrapper } from 'components/layout/Wrapper/Wrapper';
import { H1 } from 'components/layout/H1/H1';
import Accordion from 'components/common/Accordion/Accordion';
import Head from "next/head";
import DataAPI from '../api/DataAPI';

const additionAccordionClasses = {
  triggerClass: 'trigger--main',
  contentClass: 'content--main'
};

const Questions = ({ questions }) => (
  <>
    <Head>
      <title>Вопросы</title>
    </Head>
    <Section>
      <Wrapper>
        <H1>Вопросы</H1>
        <div>
          {questions.map(({ question, answer, id }) => (
            <Accordion
              key={id} title={question}
              additionClasses={additionAccordionClasses}
              button>{answer}</Accordion>))}
        </div>
      </Wrapper>
    </Section>
  </>
);

export default Questions;

const getData = async () => await DataAPI.getData();

export const getServerSideProps = async () => {
  const { questions } = await getData();
  return { props: { questions } };
};
