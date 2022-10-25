import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/aboutAr.png'
import PrimaryButtons from './buttons/PrimaryButtons';
import Paragraph from './titles/Paragraph';
import ThemeList from '../Themes/ThemeList';

const AboutStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__about{
    max-width: 1200px;
    margin: 0px auto;
    .row__about{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .about__img{
        width: 500px;
      }
      .desc{
        width: 500px;
        p{
          font-size: 16px;
          line-height: 1.5;
        }
        h1{
          margin: 10px 0px;
          font-size: 3.5rem;
          color: ${({theme : {theme}}) => 
          theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'        
          };
        }
      }
    }
  }
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__about{
    width: 100%;
    .row__about{
      flex-direction: column;
      .about__img{
        width: 100%;
      }
      .desc{
        width: 100%;
      }
    }
  }
}
`;
function About() {
  return (
    <AboutStyles id='About'>
      <div className='container__about'>
        <div className='row__about'>
          <div className='about__img'>
            <img src={aboutImg} alt="ini adalah sebuah gambar" />
          </div>
          <div className='desc'>
            <Paragraph tulisan='Who are we'/>
            <h1>Capturing life as it happens</h1>
            <Paragraph 
            tulisan='"Artistic" is a studio of some passionate photographer. Our Goal is to capture your experience.' />
            <PrimaryButtons text='Get In Touch'></PrimaryButtons>
          </div>
        </div>
      </div>
    </AboutStyles>
  )
}

export default About
