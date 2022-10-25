import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeList from '../../Themes/ThemeList'
const ServicesTitleStyles = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  color : ${({theme : {theme}}) => 
  theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
  };
`;

let ServicesTitle = (props) => {
  return <ServicesTitleStyles>{props.title}</ServicesTitleStyles>
}
ServicesTitle.propTypes = {
  title: PropTypes.string
}
export default ServicesTitle;