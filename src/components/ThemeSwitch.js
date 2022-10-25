import { useContext } from 'react';
import {FiMoon, FiSun} from 'react-icons/fi'
import styled from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'
import ThemeList from '../Themes/ThemeList';
const ThemeSwitcher = styled.div`
  label{
    height: 30px;
    width: 55px;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    background-color: #cfc8f4;
    border-radius: 50px;
    z-index: 1;
    .icon{
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg{
      color : var(--white);
    }
  }
  input{
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
  label::after{
    position: absolute;
    content: '';
    border-radius:50%;
    transform: translateY(-50%);
    top: 50%;
    left: 5px;
    height: 20px;
    width: 20px;
    background: var(--meduimStateBlue);
    z-index: 1;
    transition: all 0.5s ease;
  }
  input:checked + label::after{
    left: calc(100% - 20px - 5px);
  }
`;
function ThemeSwitch() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <ThemeSwitcher>
      <input type="checkbox" id='switcher' onChange={toggleTheme} checked={theme === ThemeList.dark} />
        <label htmlFor='switcher'>
            <div className='icon'>
              <FiSun />
            </div>
            <div className='icon'>
              <FiMoon />
            </div>
        </label>
    </ThemeSwitcher>
  )
}

export default ThemeSwitch
