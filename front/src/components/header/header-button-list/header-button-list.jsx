import React from 'react';
import PropTypes from 'prop-types';
import HeaderButton from '../header-button/header-button';

function HeaderButtonList({ handleTab, buttonData }) {
  const elements = buttonData.map((item) => {
    return <HeaderButton {...item} handleTab={handleTab(item.label)} />;
  });

  return <div>{elements}</div>;
}

HeaderButtonList.propTypes = {
  handleTab: PropTypes.func.isRequired,
  buttonData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default HeaderButtonList;