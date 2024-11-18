import React from "react";
import style from "./style";
import { Image, ScrollView, View } from "react-native";

const ProfileTabContent = () => {
    return(
        <ScrollView style={style.profileTabContainer} showsVerticalScrollIndicator={false}>
           <View style={style.profileTabContent}>
           <Image style={style.image} resizeMode={'contain'} source={require('../../assets/images/default_post.png')}/>
           <Image style={style.image} resizeMode={'contain'} source={require('../../assets/images/default_post.png')}/>
           <Image style={style.image} resizeMode={'contain'} source={require('../../assets/images/default_post.png')}/>
           <Image style={style.image} resizeMode={'contain'} source={require('../../assets/images/default_post.png')}/>
           </View>
        </ScrollView>
    );
};

export default ProfileTabContent;

