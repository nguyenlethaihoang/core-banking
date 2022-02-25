import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Header } from '@src/components';
import ExploreHeader from '@src/components/Header/ExploreHeader';
import EventScreen from '@src/screens/explore/event';
import PostsScreen from '@src/screens/explore/post';
import SearchScreen from '@src/screens/explore/search';

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator
      initialRouteName='Posts'
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Group
        screenOptions={{
          headerShown: true,
        }}>
        <ExploreStack.Screen name='Posts' component={PostsScreen} />
        <ExploreStack.Screen name='Events' component={EventScreen} />
      </ExploreStack.Group>

      <ExploreStack.Screen name='PostDetails' component={PostsScreen} />
      <ExploreStack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <ExploreStack.Screen name='Search' component={SearchScreen} />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  );
}

export default ExploreStackScreen;

export type ExploreStackParamList = {
  //
  Posts: undefined;
  Events: undefined;
  PostDetails: undefined;
  Search: undefined;
};

type PostsScreenProps = NativeStackScreenProps<ExploreStackParamList, 'Posts'>;
type PostDetailsScreenProps = NativeStackScreenProps<
  ExploreStackParamList,
  'PostDetails'
>;
type EventsScreenProps = NativeStackScreenProps<
  ExploreStackParamList,
  'Events'
>;
type SearchScreenProps = NativeStackScreenProps<
  ExploreStackParamList,
  'Search'
>;

export type {
  PostDetailsScreenProps,
  PostsScreenProps,
  EventsScreenProps,
  SearchScreenProps,
};
