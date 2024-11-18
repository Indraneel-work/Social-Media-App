import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { getFontFamily } from '../helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite:{
    backgroundColor:'#FFFFFF',
  },
  flex:{
    flex:1,
  },
  flexGrow:{
    flexGrow:1,
  }
});

export default globalStyle;
