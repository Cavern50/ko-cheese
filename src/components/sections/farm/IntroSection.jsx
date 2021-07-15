import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/common/Buttons/TabButton/TabButton";
import { useTabs } from "hooks";
import Link from "next/link";

export const IntroSection = ({ categories, url }) => {
  // eslint-disable-next-line array-callback-return,consistent-return
  const { activeId, toggleActiveId } = useTabs(categories.find(category => category.url === url).id, false);

  return (
    <Section>
      <Wrapper>
        <Tabs>
          {
            categories.map(({ title, id, url }) =>
              <Link href={url}>
                <a>
                  <TabButton index={id}
                             active={activeId}
                             toggleActive={toggleActiveId}
                             text={title}/>
                </a>
              </Link>
            )}
        </Tabs>
        <img src="" alt=""/>
      </Wrapper>
    </Section>
  );
};

