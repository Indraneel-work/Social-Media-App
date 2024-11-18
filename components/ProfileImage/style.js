import { StyleSheet } from "react-native";
import {
    horizontalScale,
    scaleFontSize,
    verticalScale,
  } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    profileImageContainer:{
        borderColor: '#F35BAC',
        borderRadius: 50,
        borderWidth: 1,
        padding: horizontalScale(3),
    },
});

export default style;

