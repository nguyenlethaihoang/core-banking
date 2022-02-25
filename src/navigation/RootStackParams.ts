import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Intro: undefined;

  //Auth
  Register: undefined;
  RoleChoose: undefined;
  ExpertLogin: undefined;
  UserLogin: undefined;

  //Root Stack
  Root: undefined;

  //
  Posts: undefined;
  PostDetails: undefined;
  Search: undefined;
  EmotionDiary: undefined;
  DashboardEmotionDiary: undefined;
};

//Authentication
type ExpertLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ExpertLogin'
>;
type UserLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UserLogin'
>;
type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;
type IntroScreenProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
type RoleChooseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RoleChoose'
>;

type RootStackProps = NativeStackScreenProps<RootStackParamList, 'Root'>;

//Explore
type PostDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PostDetails'
>;
type MorePostScreenProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;
type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

//Emotion Diary
type EmotionDiaryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EmotionDiary'
>;
type DashboardEmotionDiaryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DashboardEmotionDiary'
>;

export type {
  ExpertLoginScreenProps,
  UserLoginScreenProps,
  RegisterScreenProps,
  IntroScreenProps,
  RoleChooseScreenProps,
  MorePostScreenProps,
  PostDetailsScreenProps,
  SearchScreenProps,
  EmotionDiaryScreenProps,
  DashboardEmotionDiaryScreenProps,
  RootStackProps
};
