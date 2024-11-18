import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={style.userName}>Sample Jordanson</Text>
        <View style={style.userStatParentContainer}>
          <View style={style.userStatContainer}>
            <Text style={style.userStatCount}>45</Text>
            <Text style={style.userStatTitle}>Following</Text>
          </View>
          <View style={style.userStatDivider} />
          <View style={style.userStatContainer}>
            <Text style={style.userStatCount}>-2</Text>
            <Text style={style.userStatTitle}>Followers</Text>
          </View>
          <View style={style.userStatDivider} />
          <View style={style.userStatContainer}>
            <Text style={style.userStatCount}>1M</Text>
            <Text style={style.userStatTitle}>Posts</Text>
          </View>
        </View>
        <View style={style.userProfileDivider} />
        {/* <View style={style.userContentTitleContainer}>
          <Text style={style.userContentTitle}>Photos</Text>
          <Text style={style.userContentTitle}>Videos</Text>
          <Text style={style.userContentTitle}>Saved</Text>
        </View> */}
        <View style={globalStyle.flex}>
        <ProfileTabsNavigation/>
        </View>
        {/* <View style={style.userPhotosContainer}>
          <Image
            style={style.userPhotos}
            source={require('../../assets/images/default_post.png')}
          />
          <Image style={style.userPhotos} source={require('../../assets/images/default_post.png')} />
          <Image style={style.userPhotos} source={require('../../assets/images/default_post.png')} />
          <Image style={style.userPhotos} source={require('../../assets/images/default_post.png')} />
          <Image style={style.userPhotos} source={require('../../assets/images/default_post.png')} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
