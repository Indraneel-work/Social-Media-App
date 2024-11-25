import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    profileTabContainer:{
        backgroundColor:'#FFFFFF',
    },
    profileTabContent:{
        paddingHorizontal: horizontalScale(11),
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    image:{
        width:horizontalScale(150),
        height:verticalScale(90),
        marginTop:verticalScale(11),
    }
});

export default style;
