import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList';


const TeamBoxStyles = styled.div`
  width: 300px;
  img{
    border-radius: 10px;
  }
  h3{
    font-size: 20px;
    color : ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
    };
  }
  p{
    font-size: 15px;
    color : ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
    };
  }
  @media screen and (max-width:570px) {
    width: 100%;
    margin: 20px 0px;
  }
`;

function TeamBox(props) {
  return (
    <TeamBoxStyles>
      <img src={props.picture} alt="Ini adalah sebuah gambar"/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </TeamBoxStyles>
  )
}
TeamBox.propTypes={
  picture : PropTypes.string,
  title : PropTypes.string,
  text : PropTypes.string
}
export default TeamBox
