import React from 'react'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList'
const TitleStyles = styled.h1`
  font-size: 4rem;
  color: ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)':'var(--lightBlue_1)'
  };
  font-weight: 900;
  text-transform: capitalize;
`
function HeroTitle({children,...rest}) {
  return  <TitleStyles {...rest}>{children}</TitleStyles>
}

export default HeroTitle
