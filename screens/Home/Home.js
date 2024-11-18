import React from 'react';
import {useState, useEffect} from 'react';
import {
  FlatList,
  FlatListComponent,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Platform,
} from 'react-native';
import { getFontFamily } from '../../assets/helper';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPosts/UserPost';
import { scaleFontSize } from '../../assets/styles/scaling';
import style from './style';
import { NavigationContainer } from '@react-navigation/native';
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Jameth',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Andrea',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Parik',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nick',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Mina',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Shavaro',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Oprah',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Daljith',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Rinkiya',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      bookmarks: 6,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      bookmarks: 12,
      id: 5,
    },
  ];
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setuserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setuserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setisLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setuserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setuserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setisLoadingUserPosts] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setisLoadingUserStories(true);
    const getInitialStoriesData = pagination(
      userStories,
      1,
      userStoriesPageSize,
    );
    setuserStoriesRenderedData(getInitialStoriesData);
    setisLoadingUserStories(false);

    setisLoadingUserPosts(true);
    const getInitialPostsData = pagination(userPosts, 1, userPostsPageSize);
    setuserPostsRenderedData(getInitialPostsData);
    setisLoadingUserPosts(false);
  }, []);
  return (
      <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* <View style={{flexDirection:'row'}}>
        <Switch
          value={isOn}
          onValueChange={value => setIsOn(value)}
          trackColor={Platform.OS === 'android' && {
            false: 'grey',
            true: 'red',
          }}
          style={
            Platform.OS === 'android' && {
              transform: [{scaleX: 1.5}, {scaleY: 1.5}],
            }
          }
        />
      </View> */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={style.messageIconContainer} onPress={() => navigation.navigate(Routes.Profile)}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    style={style.messageIcon}
                  />
                  <View style={style.mesasgeNumberContainer}>
                    <Text style={style.messageNumberText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setisLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setuserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setuserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setisLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setisLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setuserPostsCurrentPage(userPostsCurrentPage + 1);
              setuserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setisLoadingUserPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
