import React from 'react';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';
import { menuItems } from './menuItems';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Panel = styled.div`
  background: white;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 70px #c7cbe3;
  height: 875px;
  padding-top: 50px;
  overflow-y: scroll;
  width: 375px;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  & li {
    margin-left: 15px;
    display: flex;
    padding-right: 30px;
    position: relative;
    gap: 20px;
    margin-bottom: 45px;
  }

  & li:nth-child(4n + 1):before {
    --background: #e1f1fe;
  }

  & li:nth-child(4n + 2):before {
    --background: #ffe2f0;
  }

  & li:nth-child(4n + 3):before {
    --background: #f7f7fe;
  }

  & li:nth-child(4n + 4):before {
    --background: #defef0;
  }

  & li:before {
    background: var(--background);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 30px;
    top: 0;
    z-index: 1;
  }
`;

const currentMenu = [...menuItems];

function App() {
  return (
    <Wrapper>
      <Panel>
        <h1>To Go Menu</h1>
        <MenuItems>
          {currentMenu.map((item) => (
            <MenuItem {...item} />
          ))}
        </MenuItems>
      </Panel>
      <Panel>
        <h1>Your Cart</h1>
      </Panel>
    </Wrapper>
  );
}

export default App;
