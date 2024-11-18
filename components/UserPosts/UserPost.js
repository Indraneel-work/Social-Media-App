import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../ProfileImage/ProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import style from './style';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userPostHeaderContainer}>
        <View style={style.userProfileImageContainer}>
        <UserProfileImage
          profileImage={props.profileImage}
          imageDimensions={horizontalScale(48)}
        />
        <View style={style.userInfoContainer}>
          <Text style={style.userName}>{props.firstName} {props.lastName}</Text>
          {props.location && <Text style={style.userLocation}>{props.location}</Text>}
        </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={scaleFontSize(20)}/>
      </View>
      <View style={style.userPostImage}>
        <Image source={props.image}/>
      </View>
      <View style={style.userPostReactionContainer}>
        <View style={style.userPostLikeContainer}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
          <Text style={style.userPostReactionNumber}>{props.likes}</Text>
        </View>
        <View style={style.userPostCommentContainer}>
          <FontAwesomeIcon icon={faComment} color={'#79869F'}/>
          <Text style={style.userPostReactionNumber}>{props.comments}</Text>
        </View>
        <View style={style.userPostBookmarkContainer}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
          <Text style={style.userPostReactionNumber}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.proptypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
