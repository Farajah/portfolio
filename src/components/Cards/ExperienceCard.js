import React from 'react'
import styled from 'styled-components';

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      {/* <Description></Description> */}
      {/* {experience.doc && (
        <a href={experience.doc} target="new">
          <Document />
        </a>
      )} */}
    </Card>
  );
};

export default ExperienceCard;
