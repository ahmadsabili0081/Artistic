import { createContext, useReducer } from "react";
import ThemesList from "../Themes/ThemeList";

const ThemeContext  = createContext();
const LightTheme = ThemesList.light;
const darkTheme = ThemesList.dark

const themeReducer = (state,action ) => {
  switch(action.type){
    case 'ToggleTheme' : 
    localStorage.setItem('theme', state.theme === darkTheme ? LightTheme : darkTheme);
    return{
      theme : state.theme === darkTheme ? LightTheme : darkTheme
    }
    default : 
    return state;
  }
}

const ThemeContextProvider = ({children}) =>{
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme : dark)').matches
    if(theme){
      return theme;
    }
    if(prefersDark){
      return darkTheme
    }
    return LightTheme
  }
  const initialState = {
    theme : getInitialTheme(),
  }
  const [state,dispatch] = useReducer(themeReducer,initialState);
  const value = {
    theme : state.theme,
    toggleTheme : () => {
      dispatch({type: 'ToggleTheme'})
    }
  }

  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
export {ThemeContextProvider}
export default ThemeContext;

