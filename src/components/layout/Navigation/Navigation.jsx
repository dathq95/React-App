import React from 'react';
import {
  Badge,
  BadgeOuter,
  CartIcon,
  BadgeText,
  HotlineIcon,
  NavContainer,
  NavLink,
  NavText,
  OrderIcon,
  TextContent,
} from './Navigation';

const NavItem = ({ href, icon, textKey, textValue, badge }) => (
  <NavLink href={href}>
    {icon}
    <NavText>
      {badge ? (
        <BadgeText>
          {textKey}
          <br />
          {textValue}
        </BadgeText>
      ) : (
        <TextContent>
          {textKey}
          <br />
          {textValue}
        </TextContent>
      )}
    </NavText>
    {badge && (
      <BadgeOuter>
        <Badge>{badge}</Badge>
      </BadgeOuter>
    )}
  </NavLink>
);

const NavComponent = () => {
  return (
    <NavContainer fluid>
      <NavItem href="#action1" icon={<HotlineIcon />} textKey="Hotline" textValue="19001010" />
      <NavItem href="#action2" icon={<OrderIcon />} textKey="Look up" textValue="Orders" />
      <NavItem href="#action3" icon={<CartIcon />} textKey="Cart" badge="2" />
    </NavContainer>
  );
};

export default NavComponent;
