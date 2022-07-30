import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  return <MyContext.Provider>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
