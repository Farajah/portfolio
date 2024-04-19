import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import {projects} from "../../data/constants"; 
import Projectcard from '../Cards/Projectcard';

const Container = styled.div`
  Background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    front-size:32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

const ToogleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

 @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToogleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) => 
    active && 
    `
      background-color: ${theme.primary + 20};
    `}

    &:hover {
      background-color: ${({ theme }) => theme.primary + 8};
    }

    @media (max-width: 768px) {
      padding: 6px 8px;
      border-radius: 4px;
    }
`;

const Divider = styled.div `
    width: 1.5px;
    background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;
 
const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>
                I have been working on a wide range of projects. From Web apps, android apps, IOS apps. Here are some of my projects
            </Desc>

            <ToogleGroup>
              {toggle === "all" ? (
                <ToogleButton 
                active value = "all"
                onClick={() => setToggle("all")}>
                  All
                  </ToogleButton>
              ) : (
                <ToogleButton value="all" onClick={() => setToggle("all")}>
                  All
                </ToogleButton>
              )}
                <Divider />
              {toggle === "android app" ? (
                <ToogleButton active onClick={() => setToggle('android app')}>
                  Android Apps
                  </ToogleButton>
               ) : (
                <ToogleButton onClick={() => setToggle('android app')}>
                  Android Apps
                </ToogleButton>
              )}
                <Divider />
              {toggle === "ios app" ? (
                <ToogleButton active onClick={() => setToggle('ios app')}>
                  IOS Apps
                </ToogleButton>
               ) : (
                <ToogleButton onClick={() => setToggle('ios app')}>
                IOS Apps
                </ToogleButton>
                )}
              <Divider />
              {toggle === "web app" ? (
                <ToogleButton active onClick={() => setToggle('web app')}>
                  Web Apps
                </ToogleButton>
               ) : (
                <ToogleButton onClick={() => setToggle('web app')}>
                Web Apps
                </ToogleButton>
                )}
            </ToogleGroup>

            <CardContainer>
              {toggle === "all" && 
                projects.map((project) => <Projectcard project ={project} />)}
                {projects
                  .filter((item) => item.category === toggle)
                  .map((project) => (
                    <Projectcard project={project} />
                  ))}
            </CardContainer>
        </Wrapper>
    </Container>
  );
};

export default Projects;
