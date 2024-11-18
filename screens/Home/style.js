import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { getFontFamily } from '../../assets/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginStart: verticalScale(27),
    marginEnd: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageIconContainer: {
    height: verticalScale(20),
    padding: horizontalScale(14),
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageIcon:{
    color:'#898D22',
  },
  mesasgeNumberContainer: {
    justifyContent: 'center',
    backgroundColor: '#F35BAC',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10,
    width:12,
    height:12,
    position:'absolute',
    right:10,
    top:11,
  },
  messageNumberText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(8),
    fontFamily: getFontFamily('Inter_28pt', '700'),
  },
  userStoryContainer:{
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer:{
    marginHorizontal: horizontalScale(24),
  }
});

export default style;
