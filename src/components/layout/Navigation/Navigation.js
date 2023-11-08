import styled from 'styled-components';
import { Container, Nav } from 'react-bootstrap';
import { LuCalendarSearch } from 'react-icons/lu';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
`;

export const NavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const HotlineIcon = styled(BsTelephoneInbound)`
  font-size: 22px;
  color: #fff;
`;

export const OrderIcon = styled(LuCalendarSearch)`
  font-size: 28px;
  color: #fff;
`;

export const NavText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.span`
  font-size: 12px;
  white-space: nowrap;
  font-weight: 600;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 32px;
  color: #fff;
`;

export const BadgeText = styled.span`
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  font-weight: 600;
  display: block;
  text-align: center;
  margin-top: 15px;
`;

export const Badge = styled.div`
  width: 16px;
  height: 16px;
  background: #000;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  line-height: 13px;
  white-space: nowrap;
`;

export const BadgeOuter = styled.div`
  width: 22px;
  height: 22px;
  background: #a59d82;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-right: 8px;
  top: 12px;
`;
