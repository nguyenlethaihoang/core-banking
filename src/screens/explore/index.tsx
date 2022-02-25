import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';
import { StyleSheet } from 'react-native';
import { default as EventScreen, default as PostsScreen } from './event';
import PostDetailsScreen from './post_details';
import SearchScreen from './search';

// const ExploreScreen: React.FC<ExploreScreenProps> = () => {
//   const { t } = useTranslation();

//   return (
//     <Box bgColor={COLORS.gray_1} container paddingHorizontal={scaleSize(10)}>
//       <Stack
//         direction='row'
//         space={scaleSize(20)}
//         style={styles.buttonContainer}>
//         {/* FIXME: Change to Button component */}
//         <RNButton title={t('Event')} onPress={() => Alert.alert('test')} />
//         <RNButton title={t('Post')} onPress={() => Alert.alert('test')} />
//       </Stack>
//       {/* <PostsScreen /> */}
//       <EventScreen />
//     </Box>
//   );
// };

// export default ExploreScreen;

export { EventScreen, PostsScreen, SearchScreen, PostDetailsScreen };

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray_1,
    flex: 1,
    paddingHorizontal: scaleSize(10),
    position: 'relative',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginVertical: scaleSize(12),
  },
});
