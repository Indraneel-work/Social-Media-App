import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userProfileImageContainer: {flexDirection: 'row'},
  userInfoContainer: {
    justifyContent: 'center',
    marginStart: horizontalScale(10),
  },
  userName: {
    color: '#000000',
    fontFamily: getFontFamily('Inter_24pt', 600),
    fontSize: scaleFontSize(16),
  },
  userLocation: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter_24pt', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  userPostImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    paddingBottom: verticalScale(20),
  },
  userPostLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostCommentContainer: {
    marginStart: horizontalScale(27),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostBookmarkContainer: {
    marginStart: horizontalScale(27),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostReactionContainer: {
    flexDirection: 'row',
    marginStart: horizontalScale(20),
  },
  userPostReactionNumber: {
    fontSize: scaleFontSize(14),
    marginStart: horizontalScale(3),
    color: '#79869F',
  },
});

export default style;
