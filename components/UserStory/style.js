import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginEnd: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter_24pt', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default style;
