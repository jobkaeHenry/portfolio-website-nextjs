import { NextComponentType } from "next";
import styled from "styled-components";
import Image from "next/image";

const HeaderWrapper = styled.nav`
  width: 100%;
  height: 64px;
  padding: 0 48px;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavWrapper = styled.ul`
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
  &:hover {
    font-weight: 700;
    color: #b41b85;
    background: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(to right, #b41b85, #12abbe) border-box;
    border-bottom: 2px solid transparent;
  }
`;

const Header = () => {
  const menuElem: string[] = ["Home", "About me", "Project", "Contact"];

  return (
    <HeaderWrapper>
      <Image src="/logo.jpg" alt="logo" width={48} height={48}></Image>
      <NavWrapper>
        {menuElem.map((e: string) => (
          <MenuElem key={e}>{e}</MenuElem>
        ))}
      </NavWrapper>
    </HeaderWrapper>
  );
};
export default Header;
