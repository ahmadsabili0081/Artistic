import React from 'react'
import styled from 'styled-components'
import Paragraph from '../titles/Paragraph'
import Team1 from '../../assets/team1Ar.png'
import Team2 from '../../assets/team2Ar.png'
import Team3 from '../../assets/team3Ar.png'
import TeamBox from './TeamBox'
import ThemeList from '../../Themes/ThemeList'


const TeamSectionStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  .container__teams{
    max-width: 1200px;
    margin: 0px auto;
    h1{
      font-size: 3.5rem;
      color : ${({theme : {theme}}) => 
    theme === ThemeList.light ? 'var(--dark-blue-2)' : 'var(--lightBlue_1)'
    };
    }
    .row__teams{
      margin-top: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
@media screen and (max-width:570px){
  padding: 50px 10px;
  .container__teams{
    width: 100%;
    .row__teams{
      flex-direction: column;
    }
  }
}
`;

function Team() {
  return (
    <TeamSectionStyles>
      <div className='container__teams'>
        <Paragraph tulisan='Team Members'/>
        <h1>The Best Team Available</h1>
        <div className='row__teams'>
         <TeamBox picture={Team1} title='Rasu' text='Photo Editor'/>
         <TeamBox picture={Team2} title='Shaif Arfan' text='Photographer' />
         <TeamBox picture={Team3} title='Ariq Alsina' text='Photographer' />
        </div>
      </div>
    </TeamSectionStyles>
  )
}

export default Team
