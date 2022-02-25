import { scaleSize } from '@core/utils';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@src/assets/const';
import { Box, Stack } from '@src/components';
import { PostDetailsScreenProps } from '@src/navigation/ExploreStackScreen';

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button as RNButton,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

const PostDetailsScreen: React.FC = (props: Props) => {
  const { t } = useTranslation();

  const { goBack } = useNavigation<PostDetailsScreenProps['navigation']>();

  return (
    <Box bgColor={COLORS.gray_1} container paddingHorizontal={scaleSize(10)}>
      <Box container paddingHorizontal={scaleSize(20)}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          {/* FIXME: Change to Header component */}
          <Text onPress={() => goBack()}>Close</Text>
          <Stack direction='row'>
            <RNButton title={t('Event')} onPress={() => {}} />
            <RNButton title={t('Post')} onPress={() => {}} />
          </Stack>
          <Text>Back</Text>
        </Stack>
        <Text style={styles.smallText}>Thứ 6, 21/1/2022, 22:41 </Text>
        <View style={styles.marginY}>
          <Text style={styles.title}>Meet your goals</Text>
        </View>
        <Image
          source={{ uri: 'https://picsum.photos/id/1015/400/300' }}
          style={styles.image}
        />
        <View style={styles.marginY}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
            veritatis tempora totam qui eius quas magni vero sunt sed. Corrupti,
            unde omnis excepturi in qui labore exercitationem necessitatibus
            error.
          </Text>
        </View>
        <Box marginTop={scaleSize(20)}>
          <Text>{'Dr. ĐạtĐT'}</Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: scaleSize(200),
  },
  marginY: {
    marginVertical: scaleSize(20),
  },
  smallText: {
    color: COLORS.dark_gray_2,
    textAlign: 'left',
    fontSize: scaleSize(16),
  },
  title: {
    textAlign: 'center',
    fontSize: scaleSize(22),
    fontWeight: '700',
  },
  description: {
    color: COLORS.black_2,
    fontSize: scaleSize(16),
    lineHeight: scaleSize(22),
  },
});
export default PostDetailsScreen;
