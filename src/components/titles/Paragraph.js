import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import ThemeList from "../../Themes/ThemeList";

const ParagraphStyles = styled.p`
  font-size: 1.5rem;
  line-height: 1.4rem;
  font-family: 'Poppins', sans-serif;
  color: ${({theme : {theme}}) => 
  theme === ThemeList.light ? 'var(--dark-blue)' : 'var(--lightblue_2)'
  };
  @media screen and (max-width:570px) {
    line-height: 1.5;
  }
`;

function Paragraph(props) {
  return  <ParagraphStyles>{props.tulisan}</ParagraphStyles>
}
Paragraph.propTypes = {
  tulisan : PropTypes.string
}
export default Paragraph
