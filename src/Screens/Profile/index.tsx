import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BackHandler, } from "react-native";
import { Container, Content, Icon } from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent';
import InformationContainer from './components/InformationContainer';
import AboutCard from './components/About/AboutCard';
import EducationList from './components/Education/EducationList';
import ExperienceList from './components/Experience/ExperienceList';
import { useNavigation } from '@react-navigation/native';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/Dispatchers';
import { connect } from 'react-redux';

const Profile = (props) => {
  const navigation = useNavigation();

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
  //Get Data from redux
  const education = props.educationList.length !== 0 && props.educationList || []
  const experience = props.experienceList.length !== 0 && props.experienceList || []

  const onChangeSearchText = (text) => { }

  return (
    <Container>
      <HeaderComponent
        navigation={navigation}
        style={{ backgroundColor: '#083352', }}
        backIcon={true}
        bodyText={'Home'}
        right={true}
        placeholder={'Search'}
        value={''}
        onChangeText={text => onChangeSearchText(text)}
      />
      <Content>
        <InformationContainer
          displayImage={props.profilePicture}
          firstName={props.firstName}
          lastName={props.lastName}
          title={props.occupation}
          // description={`${education[education.length - 1].school} - ${experience[experience.length - 1].companyName}`}
          // school={education.length > 0 ? education[education.length - 1].school : ""}
          // companyName={experience.length > 0 ? experience[experience.length - 1].companyName : ""}
          location={props.address.includes("null") ? "" : props.address}
          connectionsCount={""} //"500+ connections"
          {...props}
        />
        <AboutCard
          aboutDescriptionText={props.about}
          {...props}
        />
        <EducationList
          educationList={education}
          {...props}
        />
        <ExperienceList
          experienceList={experience}
          {...props}
        />
      </Content>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
