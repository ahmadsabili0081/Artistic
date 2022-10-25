import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll'
import styled from 'styled-components'
import ThemeList from '../Themes/ThemeList';
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch';

const HeaderStyle = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 5;
  padding: 1%;
  background-color: ${({ theme : {theme}}) => 
  theme === ThemeList.light ? 'var(--lightBlue_1)' : 'var(--lightblue_2)'
};
  border-bottom: 1px solid var(--meduimStateBlue);
  .container__header{
    max-width: 1200px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .closeNav{
      width: 30px;
      height: 30px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
  nav ul li{
    a{
      font-size: 1.6rem;
      font-weight: 500;
      display: inline-block;
      color : var(--dark-blue);
    }
  }
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li{
    margin: 0px 5px;
    padding: 5px;
  }
  .iconMenu{
    width: 25px;
    height: 25px;
    margin: 0px 10px;
  }
  .navWrapper{
    display: flex;
    align-items: center;
  }
  @media screen and (max-width:768px) {
    width: 100%;
    padding: 3%;
    .container__header{
      width: 100%;
    }
    nav.navbar{
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 80vh;
      background-color: ${({theme : { theme }}) => 
      theme === ThemeList.light ? 'var(--lightblue_2)' : 'var(--dark-blue-4)'
    };
      overflow: hidden;
      transform: translateX(100%);
      box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
      z-index: 2;
      transition: 0.5s ease-out;
      ul{
        width: 100%;
        flex-direction: column;
      }
    }
    nav.navbar.open{
      transform: translateX(0);
    }
  }
`;

 function Header() {
  const [navOpen,setNavOpen] = useState(false);
  const [mobile,setMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize',() => {
      setMobile(window.matchMedia('(max-width:768px)').matches)
    })
  },[]);
  let handleClick = () => {
    setNavOpen(true)
  }
  let handleClose = () => {
    setNavOpen(false);
  }

   return (
     <HeaderStyle>
        <div className='container__header'>
          <div className='logo'> 
            <Logo />
          </div>
             <div className='navWrapper'>
                <nav className={mobile && navOpen ? 'navbar open' : 'navbar'}>
                  {mobile && (
                  <div onClick={handleClose} className='closeNav'>
                      <FiX />
                  </div>
                  )}
                  <ul>
                    <li>
                      <Link to='Home' smooth >Home</Link>
                    </li>
                    <li>
                      <Link to='About' smooth>About</Link>
                    </li>
                    <li>
                      <Link to='Services' smooth>Services</Link>
                    </li>
                    <li>
                      <Link to='Contact' smooth>Contact</Link>
                    </li>
                  </ul>
                </nav>  
              <ThemeSwitch />
              {mobile && 
              <div className='iconMenu' onClick={handleClick}>
                <FiMenu />
              </div>
              }
           </div>
        </div>
     </HeaderStyle>
   )
 }
 
 export default Header
