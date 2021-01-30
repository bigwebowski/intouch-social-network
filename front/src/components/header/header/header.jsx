import './header.css';
import React from 'react';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';
import HeaderButtonList from '../header-button-list/header-button-list';
import { articles, addArticle, profile } from '../../../variables/tabs';

function Header({ handleTab, username }) {
  const buttonData = [
    { key: '1', label: articles },
    { key: '2', label: addArticle },
    { key: '3', label: profile },
  ];
  return (
    <div className="header">
      <Logo />
      <HeaderButtonList buttonData={buttonData} handleTab={handleTab} />
      <Avatar username={username} />
    </div>
  );
}

export default Header;