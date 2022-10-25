import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList'
import { Link } from 'react-scroll';
const PrimaryButtonsStyles = styled.button`
  display: block;
  margin: 20px 0px;
  padding: 10px 30px;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  border-radius: 8px;
  font-size: 15px;
  color: var(--white);
  outline: none;
  background-color: var(--meduimStateBlue);
  border: none;
  cursor: pointer;
`;

function PrimaryButtons(props) {
  return <PrimaryButtonsStyles type='button'><Link to='Contact' smooth>{props.text}</Link></PrimaryButtonsStyles>
}
PrimaryButtons.propTypes = {
  text : PropTypes.string
}
export default PrimaryButtons
