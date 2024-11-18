import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './style';
import UserProfileImage from '../ProfileImage/ProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={props.profileImage} imageDimensions={50} />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
export default UserStory;
