import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/helper";

const style = StyleSheet.create({
    backButton:{
        color:'blue',
    },
    profileImage:{
        height:horizontalScale(110),
        width:horizontalScale(110),
    },
    profileImageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:verticalScale(25),
    },
    profileImageContent:{
        borderWidth:1,
        borderColor:'#0150EC',
        padding:horizontalScale(4),
        borderRadius: horizontalScale(110),
    },
    userName:{
        marginTop: verticalScale(20),
        textAlign:'center',
        fontFamily:getFontFamily('Inter_28pt', '600'),
        justifyContent:'center',
        fontSize: scaleFontSize(20),
    },
    userStatCount:{
        textAlign:'center',
        fontFamily:getFontFamily('Inter_28pt', '600'),
        justifyContent:'center',
        fontSize: scaleFontSize(20),
        color:'#022150',
    },
    userStatTitle:{
        textAlign:'center',
        fontFamily:getFontFamily('Inter_28pt', '500'),
        justifyContent:'center',
        fontSize: scaleFontSize(18),
    },
    userStatContainer:{
    },
    userStatParentContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:verticalScale(20),
        marginHorizontal: horizontalScale(50),
    },
    userProfileDivider:{
        borderBottomWidth:1,
        marginVertical:verticalScale(5),
        marginHorizontal: horizontalScale(15),
        borderColor: '#EFF2F6',
    },
    userStatDivider:{
        borderLeftWidth:1,
        borderColor: '#EFF2F6',
    },
    userContentTitleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:horizontalScale(40),
        marginVertical:verticalScale(10),
    },
    userContentTitle:{
        fontFamily:getFontFamily('Inter_28pt', '500'),
        fontSize:scaleFontSize(18),
    },
    userPhotos:{
        width:horizontalScale(120),
        height:horizontalScale(120),
        margin:horizontalScale(10),
    },
    userPhotosContainer:{
        
        paddingHorizontal:horizontalScale(20),
        padding:verticalScale(15),
    },
});

export default style;
