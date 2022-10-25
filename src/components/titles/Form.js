import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList';


const FormStyles = styled.div`
  width:100% ;
  label{
    text-align: left;
    font-size: 1.6rem;
    text-transform: capitalize;
    color : ${({theme : {theme}}) =>
      theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightblue_2)'
    } ;
  }
  input,textarea{
    margin: 1rem 0px;
    width : 100%;
    height: 40px;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.6rem;
    background-color: var(--lightblue_2);
  }
  textarea{
    height: 150px;
    resize: none;
  }
@media screen and (max-width:570px){
  input,textarea{
    width: 100%;
  }
}
`;

function Form(props) {
  return (
    <FormStyles>
      <label htmlFor={props.label}>{props.label}</label>
      {props.rows <=1 ? 
      (<input className={props.className} type={props.type} placeholder={props.placeholder} />)
      :(
        <textarea className={props.className} placeholder={props.placeholder}></textarea>
      )}
    </FormStyles>
  )
}
Form.propTypes={
  label : PropTypes.string,
  rows : PropTypes.number,
  className : PropTypes.string,
  type : PropTypes.string,
  placeholder : PropTypes.string
}
export default Form
