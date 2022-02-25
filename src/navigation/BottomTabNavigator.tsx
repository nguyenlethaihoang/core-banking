import { scaleSize } from '@core/utils';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '@src/assets/const';
import TabBarButton from '@src/components/TabBarButton';
import ChatScreen from '@src/screens/chat';
import HomeScreen from '@src/screens/home';
import ProfileScreen from '@src/screens/profile';
import React from 'react';
import ExploreStackScreen from './ExploreStackScreen';
// import {TabNavigatorParamsList} from './TabNavigatorParams';

type TabNavigatorParamsList = {
  Home: undefined;
  Explore: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='Explore'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: (props) => <TabBarButton {...props} />,
        tabBarActiveTintColor: COLORS.black_2,
        tabBarStyle: {
          backgroundColor: COLORS.white_3,
          bottom: scaleSize(12),
          borderRadius: scaleSize(24),
          marginHorizontal: scaleSize(6),
          height: scaleSize(64),
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => <Ionicons name='home-sharp' {...props} />,
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreStackScreen}
        options={{
          tabBarIcon: (props) => <Ionicons name='search' {...props} />,
        }}
      />
      <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name='chatbubble-ellipses' {...props} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => <Ionicons name='person' {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
