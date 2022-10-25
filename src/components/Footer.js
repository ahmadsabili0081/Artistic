import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Logo from './Logo'
import Paragraph from './titles/Paragraph'

const FooterStyles = styled.footer`
  padding: 50px 0px;
  position: relative;
  background-color: var(--dark-blue-4);
  .container__footer{
    max-width: 1200px;
    margin: 0px auto;
    .row__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .text{
        width: 30%;
        margin: 20px 0px;
       p{
        text-align: center;
        line-height: 1.5;
        color: var(--lightBlue_1);
       }
      }
      .footer__link{
        ul{
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            margin: 10px;
            color: var(--lightBlue_1);
            font-size: 16px;
          }
        }
      }
    }
    .footerYear{
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        color: var(--lightBlue_1);
      }
    }
  }
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__footer{
    width: 100%;
    .row__footer{
      .text{
        width: 100%;
      }
    }
  }
}
`

function Footer() {
  return (
    <FooterStyles>
      <div className='container__footer'>
        <div className='row__footer'>
           <Logo />
           <div className='text'>
            <Paragraph tulisan='"Artistic" is a studio of some passionate photographer. Our Goal is to capture your experience.' />
           </div>
           <div className='footer__link'>
             <ul>
                <li><Link to='hero' smooth>Home</Link></li>
                <li><Link to='Services' smooth>Services</Link></li>
                <li><Link to='About' smooth>About</Link></li>
                <li><Link to='Contact' smooth>Contact</Link></li>
             </ul>
           </div>
        </div> 
        <div className='footerYear'>
           <span>@ Artistic Creative {new Date().getFullYear()}. All rights reserved</span>  
        </div> 
      </div>
    </FooterStyles>
  )
}

export default Footer
