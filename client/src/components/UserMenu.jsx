import React from "react";
import styled from "styled-components";

// import { ReactComponent as UserIconWhite } from "../img/userIconWhite.svg";

const CustomUserMenu = styled.div`
  color: white;
  width: 300px;
  height: 450px;
  position: absolute;
  top: 4rem;
  right: 3.5rem;
  border: 1px solid black;
  border-top: none;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 1rem;

  input {
    width: 100%;
    height: 1.8rem;
    border-radius: 10px;
    border: none;
    padding: 0 0.5rem;
    outline: none;
    margin-bottom: 1rem;
  }

  button {
    width: 60%;
    height: 1.8rem;
    border-radius: 10px;
    background-color: white;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem 0;
  }

  .signin-providers {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .provider-logo {
    height: 100%;
    width: 33%;
    cursor: pointer;
  }
`;

const UserMenu = ({ user }) => {
  return (
    <CustomUserMenu>
      <img src="./img/userIconWhite.svg" alt="user icon white" />
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button>Login</button>
      <p>Don't have an account?</p>
      <button>Signup</button>
      <p>or login with:</p>
      <div className="signin-providers">
        <img
          className="provider-logo"
          src="./img/facebook-icon.svg"
          alt="facebook- icon"
        />
        <img
          className="provider-logo"
          src="./img/google-icon.svg"
          alt="google icon"
        />
        <img
          className="provider-logo"
          src="./img/twitter-icon.svg"
          alt="twitter icon"
        />
      </div>
    </CustomUserMenu>
  );
};

export default UserMenu;
