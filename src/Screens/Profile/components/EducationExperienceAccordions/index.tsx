import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, BackHandler } from "react-native";
import { Container, Content, Icon } from 'native-base';

import EducationAccordion from '../Education/EducationAccordion';
import ExperienceAccordion from '../Experience/ExperienceAccordion';
import ModalHeader from '../../../../Components/ModalHeader';

const EducationExperienceAccordions = (props) => {

  const backAction = () => {
    props.navigation.goBack()
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  const profile = useSelector(state => state.Profile);

  const accordionExpanded = props.route.params.accordionExpanded;

  return (
    <Container>
      <ModalHeader
        backIcon={true}
        bodyText={"Add info to your profile"}
        rightText={"Save"}
        {...props}
      />
      <Content>
        <EducationAccordion
          educationList={profile.educationList}
          isExpanded={accordionExpanded === "education" || accordionExpanded === "all" ? true : false}
          {...props}
        />
        <ExperienceAccordion
          experienceList={profile.experienceList}
          isExpanded={accordionExpanded === "experience" || accordionExpanded === "all" ? true : false}
          {...props}
        />
      </Content>
    </Container>
  )
}

export default EducationExperienceAccordions;
