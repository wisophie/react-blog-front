import React from 'react'
import styled from 'styled-components';

export default function Projects() {
  return (
    <ProjectsStyled>
      <div>
        Projects
      </div>
    </ProjectsStyled>
  )
}
const ProjectsStyled = styled.div`
  position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100vh;
    padding-top:10vh;

`;