import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { H1 } from "components/layout/H1/H1";
import Accordion from "components/common/Accordion/Accordion";
import QuestionsAPI from "api/QuestionsAPI";

const additionAccordionClasses = {
  triggerClass: "trigger--main",
  contentClass: "content--main"
};

const Questions = ({ questions }) => (
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
);

export default Questions;

// const getQuestions = async () => await QuestionsAPI.getQuestions();
//
// export const getServerSideProps = async () => {
//   const questions = await getQuestions();
//   return {
//     props: { questions }
//   };
// };



export const getServerSideProps = async () => {
  // const categories = await getCategories();
  // const pageData = await getPageData(resolvedUrl.slice(1));
  const { questions } = await getData();
  return { props: { questions } };
};
