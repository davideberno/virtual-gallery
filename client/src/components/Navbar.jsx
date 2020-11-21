import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserMenu from "./UserMenu";

// import { ReactComponent as UserIcon } from "../img/userIcon.svg";

const CustomNav = styled.nav`
  position: static;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5.5rem 0 2rem;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavButton = styled.div`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  .link {
    text-decoration: none;
    color: black;
  }
`;

const UserIcon = styled.img`
  margin: 0 6rem;
  cursor: pointer;
`;

const Navbar = ({ user }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(true);

  return (
    <CustomNav>
      <ToolBar>
        <NavButton>
          <Link to="/" className="link">
            LOGO
          </Link>
        </NavButton>
        <NavButton>
          <Link to="/gallery" className="link">
            GALLERY
          </Link>
        </NavButton>
        <NavButton>
          <Link to="/artists" className="link">
            ARTISTS
          </Link>
        </NavButton>
      </ToolBar>
      <ToolBar>
        {user ? (
          <NavButton>FAVORITES</NavButton>
        ) : (
          <UserIcon
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            src="./img/userIcon.svg"
            alt="user icon"
          />
        )}
      </ToolBar>
      {userMenuOpen ? <UserMenu /> : null}
    </CustomNav>
  );
};

export default Navbar;
