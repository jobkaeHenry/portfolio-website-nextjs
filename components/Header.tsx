import { NextComponentType } from "next";
import styled from "styled-components";
import Image  from 'next/image';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 48px;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavWrapper = styled.nav`
  float: right;
  width: 548px;
  display: flex;
  justify-content: space-between;
`;

const MenuElem = styled.li`
  font-size: 14px;
  list-style: none;
  width: 93px;
  height: 64px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    font-weight: 700;
    color: #B41B85;
    transition-duration: 300ms;
    border-bottom: 1px solid #12ABBE;
  }
`;


const Header = () => {

  const menuElem:string[] = ["Home", "About me", "Project", "Contact"]

  return (
    <HeaderWrapper>
      <Image src="/logo.jpg" alt="logo" width={48} height = {48}></Image>
      <NavWrapper>
          {menuElem.map((e:string)=><MenuElem key={e}>{e}</MenuElem>)}
      </NavWrapper>
    </HeaderWrapper>
  );
};
export default Header;
