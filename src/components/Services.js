import styled from 'styled-components';
import ItemServices from './itemServices/ItemServices';
import ServicesTitle from './titles/ServicesTitle';
import {RiImageEditLine} from 'react-icons/ri'
const ServiceStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__services{
    max-width: 1200px;
    margin: 0px auto;
    .row__services{
      margin-top: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (max-width:570px) {
    padding: 50px 10px;
    width: 100%;
    .container__services{
      width: 100%;
      .row__services{
        flex-direction: column;
      }
    }
  }
`;
let Services = () => {
  return(
    <ServiceStyles id='Services'>
      <div className='container__services'>
        <ServicesTitle title='Our Services'/>
        <div className='row__services'>
          <ItemServices 
          title='Profesional Editing' 
          text='We do propfessional photo editing. Let us help you to take your photo next level '
          picture={<RiImageEditLine />} />

          <ItemServices 
          title='Profesional Editing' 
          text='We do propfessional photo editing. Let us help you to take your photo next level '
          picture={<RiImageEditLine />} />

          <ItemServices 
          title='Profesional Editing' 
          text='We do propfessional photo editing. Let us help you to take your photo next level '
          picture={<RiImageEditLine />} />

        </div>
      </div>
    </ServiceStyles>
  )
}

export default Services;