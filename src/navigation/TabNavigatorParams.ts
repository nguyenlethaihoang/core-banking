import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type TabNavigatorParamsList = {
    Home: undefined;
    Explore: undefined;
    Chat: undefined;
    Profile: undefined;
};

type HomeTabProps = BottomTabNavigationProp<TabNavigatorParamsList, 'Home'>;
type ExploreTabProps = BottomTabNavigationProp<TabNavigatorParamsList, 'Explore'>;
type ChatTabProps = BottomTabNavigationProp<TabNavigatorParamsList, 'Chat'>;
type ProfileTabProps = BottomTabNavigationProp<TabNavigatorParamsList, 'Profile'>;

export type {HomeTabProps, ExploreTabProps, ChatTabProps, ProfileTabProps};
