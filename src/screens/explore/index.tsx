import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';
import { Box } from '@src/components';
import ExploreHeaderTitle from '@src/components/Header/ExploreHeader';
import { ExploreScreenProps } from '@src/navigation/ExploreStackScreen';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import EventScreen from './event';
import PostsScreen from './post';
import PostDetailsScreen from './post_details';
import SearchScreen from './search';

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const [route, setRoute] = useState<'Post' | 'Event'>('Event');
  return (
    <Box bgColor={COLORS.gray_1} container paddingHorizontal={scaleSize(10)}>
      <ExploreHeaderTitle route={route} navigate={(route) => setRoute(route)} />

      {route === 'Post' && <PostsScreen />}
      {route === 'Event' && <EventScreen />}
    </Box>
  );
};

export default ExploreScreen;

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
