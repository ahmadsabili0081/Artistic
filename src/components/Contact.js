import React from 'react'
import styled from 'styled-components'
import ThemeList from '../Themes/ThemeList'
import PrimaryButtons from './buttons/PrimaryButtons';
import Form from './titles/Form';
import Paragraph from './titles/Paragraph';

const FormSectionStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__form{
    max-width: 1200px;
    margin: 0px auto;
    .row__form{
      h1{
        text-align: center;
        font-size: 3.5rem;
        color: ${({theme : {theme}}) => 
          theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'        
          };
        }
      }
      p{
        text-align: center;
      }
      form.form{
        margin: 30px auto;
        width: 600px;
        .inputGroup.flex{
          display: flex;
          justify-content: space-around;
          align-items: center;
          input{
            width: 98%;
          }
        }
      }
    }
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__form{
    width: 100%;
    .row__form{
      form.form{
        width: 100%;
        .inputGroup.flex{
          width: 100%;
          flex-direction: column;
          input{
            min-width: 100%;
          }
        }
      }
    }
  }
}
`;

function Contact() {
  return (
    <FormSectionStyles id='Contact'>
      <div className='container__form'>
        <div className='row__form'>
          <h1>Get In Touch</h1>
          <Paragraph tulisan='we would love to hear from you' />
          <form className='form'>
            <div className='inputGroup'>
                <Form label='name' className='inputName' type='text' rows={1} placeholder='Type your name' reqired/>
            </div>
            <div className='inputGroup flex'>
                <Form label='email' className='inputEmail' type='email' rows={1} placeholder='Type your email' reqired/>
                <Form label='subject' className='inputSubjek' type='text' rows={1} placeholder='Type your subject' reqired/>
            </div>
            <div className='inputGroup'>
                <Form label='Message' className='inputComment'  placeholder='write something...' reqired/>
            </div>
            <PrimaryButtons text='Submit' />
          </form>
        </div>
      </div>
    </FormSectionStyles>
  )
}

export default Contact
