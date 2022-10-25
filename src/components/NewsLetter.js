import React from 'react'
import styled from 'styled-components'
import ThemeList from '../Themes/ThemeList'
import Paragraph from './titles/Paragraph';

const NewsLetterStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__newsLetter{
    max-width: 1200px;
    margin: 0px auto;
    .row__newsLetter{
      margin: 0px auto;
      padding: 5rem 3rem;
      max-width: 500px;
      background-color: var(--meduimStateBlue);
      border-radius: 10px;
      text-align: center;
      h1{
        font-size: 3rem;
        margin: 10px 0px;
        color:var(--lightBlue_1)
      }
      p{
        margin: 10px 0px;
        color:var(--lightBlue_1)
      }
      form.form{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
          width: 100%;
          max-width: 300px;
          height: 40px;
          background-color:var(--lightBlue_1) ;
          border: none;
          outline: none;
          border-radius: 5px;
          font-size: 15px;
          padding-left: 1rem;
        }
        button{
          margin: 0px 10px;
          height: 40px;
          font-size: 1.6rem;
          cursor: pointer;
          border-radius: 5px;
          padding: 13px 20px;
          border: none;
          outline: none;
          text-transform: capitalize;
          background-color: var(--lightBlue_1) ;
        }
      }
    }
  }
@media screen and (max-width:570px){
  padding : 50px 10px;
  .container__newsLetter{
    width: 100%;
    .row__newsLetter{
      flex-direction: column;
    }
  }
}
`;

function NewsLetter() {
  return (
    <NewsLetterStyles>
      <div className='container__newsLetter'>
        <div className='row__newsLetter'>
          <h1>Join Newsletter</h1>
          <Paragraph tulisan='Get Reguler updates every week' />
          <form className='form'>
            <input className='input' type='email' placeholder='Enter your email..'/>
            <button className='buttonInput' type='button'>Join</button>
          </form>
        </div>
      </div>
    </NewsLetterStyles>
  )
}

export default NewsLetter
