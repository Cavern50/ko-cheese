import React from "react";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { useTabs } from "hooks";

import {
  ProfileHeader,
  ProfileAside,
  ProfilePersonal,
  ProfileWrapper,
  ProfileDelivery,
  ProfileOrders,
  ProfileLoyalty,
  ProfileFeedback,
  ProfileReturn,
  ProfileBody,
  ProfileHistory
} from "components/sections/profile";

const Profile = () => {
  const profileData = [
    {
      id: 1,
      title: "Заказы",
      component: <ProfileOrders/>
    },
    {
      id: 2,
      title: "История заказов",
      component: <ProfileHistory/>
    },
    {
      id: 3,
      title: "Адреса доставки",
      component: <ProfileDelivery/>
    }, {
      id: 4,
      title: "Личные данные",
      component: <ProfilePersonal/>
    }, {
      id: 5,
      title: "Отправка отзыва",
      component: <ProfileFeedback/>
    }, {
      id: 6,
      title: "Программа лояльности",
      component: <ProfileLoyalty/>
    }, {
      id: 7,
      title: "Возврат товара",
      component: <ProfileReturn/>
    }
  ];

  const { activeId, toggleActiveId } = useTabs(1, false);

  const [activePage, setActivePage] = React.useState(profileData.find(component => component.id === activeId));

  React.useEffect(() => {
    setActivePage(profileData.find(component => component.id === activeId));
  }, [activeId]);

  return (
    <Wrapper>
      <ProfileHeader/>
      <ProfileWrapper>
        <ProfileAside categories={profileData} active={activeId} setActive={toggleActiveId}/>
        <ProfileBody title={activePage.title} id={activeId}>
          {activePage.component}
        </ProfileBody>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;