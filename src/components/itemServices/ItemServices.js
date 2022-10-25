import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList';

const ItemServicesStyles = styled.div`
  padding: 3rem;
  width: 300px;
  border-radius: 12px;
  .icon{
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color: var(--meduimStateBlue);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    svg{
      width: 60%;
    }
  }
  .title{
    font-size: 2.5rem;
    font-weight: 500;
    margin: 10px 0px;
    line-height: 1.5;
    text-transform: capitalize;
    color : ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
    };
  }
  .desc{
    font-size: 15px;
    color : ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
    };
  }
  &:hover{
    background-color: var(--meduimStateBlue);
    .icon{
      background-color: var(--lightBlue_1);
      color : var(--meduimStateBlue);
    }
    .title{
      color: var(--lightBlue_1);
    }
    .desc{
      color: var(--lightBlue_1);
    }
  }
  @media screen and (max-width:570px) {
    width: 100%;
  }
`;

function ItemServices({picture,title,text}) {
  return (
    <ItemServicesStyles>
      <div className='icon'>{picture}</div>
      <p className='title'>{title}</p>
      <p className='desc'>{text}</p>
    </ItemServicesStyles>
  )
}
ItemServices.propTypes ={
  picture : PropTypes.object,
  title : PropTypes.string,
  text : PropTypes.string
}
export default ItemServices;