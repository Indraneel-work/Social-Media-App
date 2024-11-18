import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/helper";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";


const style = StyleSheet.create(
  {
    title:{
        color: '#022150',
        fontFamily: getFontFamily('Inter_28pt', '500'),
        fontSize: scaleFontSize(18),
        padding: horizontalScale(15),

    },
    titleNotFocused:{
        color:'#79869F',
        fontFamily: getFontFamily('Inter_28pt', '300'),
    },
  }
)

export default style;
