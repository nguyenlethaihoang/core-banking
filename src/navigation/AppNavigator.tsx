import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { IAuthState } from '../store/authSlice';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './RootStackParams';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator: FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Root'}>
      <AuthStack.Screen name='Root' component={BottomTabNavigator} />
      {/* <AuthStack.Screen name="Intro" component={IntoScreen} />
            <AuthStack.Screen name="Home" component={HomeScreen} />
            <AuthStack.Screen name="Explore" component={ExploreScreeRn} />
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />
            <AuthStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                    headerShadowVisible: false,
                    headerShown: true,
                    header: props => <Header headerProps={props} />,
                    headerRight: () => <Text>Test</Text>,
                }}>
                <AuthStack.Screen name="PostDetails" component={PostDetailsScreen} />
            </AuthStack.Group>

            <AuthStack.Screen name="Search" component={SearchScreen} />

            <AuthStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                    headerShadowVisible: false,
                    headerShown: true,
                    header: props => <Header headerProps={props} />,
                    headerRight: () => <Text>Test</Text>,
                }}>
                <AuthStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <AuthStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </AuthStack.Group> */}
    </AuthStack.Navigator>
  );
};

const AppNavigator: FC = ({ children }) => {
  const auth = useSelector<IRootState, IAuthState>((state) => state.auth);

  if (auth.token) {
    return <AuthNavigator />;
  }
  return <AuthNavigator />;
};

export default AppNavigator;
