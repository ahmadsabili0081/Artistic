import styled from "styled-components";
import PrimaryButtons from "./buttons/PrimaryButtons";
import HeroTitle from "./titles/HeroTitle";
import Paragraph from "./titles/Paragraph";
import HeroImage from '../assets/heroAr.png'
import { Link } from "react-scroll";

const HeroStyles = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 100px 0px;
  .container__hero{
    max-width: 1200px;
    margin: 0px auto;
    .row__hero{
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 650px;
        height: 500px;
      }
    }
  }
@media screen and (max-width:570px) {
  padding: 70px 10px;
  .container__hero{
    width: 100%;
    .row__hero{
      flex-direction: column-reverse;
      img{
        width: 100%;
        margin: 20px 0px;
      }
    }
  }
}
`;

let HeroSection = () => {
  return(
   <HeroStyles id="hero" >
    <div className="container__hero">
      <div className="row__hero">
        <div className="title__hero">
          <HeroTitle>A click of artistic joy</HeroTitle>
          <Paragraph tulisan="Because every picture tells a story, let us help you tell yours."></Paragraph>
          <PrimaryButtons text='Contact Now' />
        </div>
        <img src={HeroImage} alt="Ini adalah sebuah gambar" />
      </div>
    </div>
   </HeroStyles>
  )
}
export default HeroSection;