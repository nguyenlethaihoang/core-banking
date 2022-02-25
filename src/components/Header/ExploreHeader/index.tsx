import { scaleSize } from '@core/utils';
import { COLORS, FONTS } from '@src/assets/const';
import { Stack } from '@src/components';
import Button from '@src/components/Button';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';

interface IProps {
  route: 'Post' | 'Event';
  navigate: (_: 'Event' | 'Post') => void;
}
const ExploreHeaderTitle: React.FC<IProps> = (props) => {
  const { route, navigate } = props;
  return (
    <View style={styles.header}>
      <Stack direction='row' space={scaleSize(10)}>
        {/* FIXME: Change to Button component */}
        <Button
          title={'Post'}
          selected={route === 'Post'}
          onPress={() => {
            navigate('Post');
          }}
        />
        <Button
          title={'Event'}
          selected={route === 'Event'}
          onPress={() => {
            navigate('Event');
          }}
        />
      </Stack>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          right: 2,
        }}>
        <Neumorph
          style={{
            // padding: scaleSize(10),
            backgroundColor: COLORS.white_3,
            width: scaleSize(36),
            height: scaleSize(36),
            elevation: 6,
            borderRadius: scaleSize(36) / 2,
            // shadowColor: COLORS.dark_gray_1,
            // shadowOffset: {
            //   width: 4,
            //   height: 4,
            // },
            // shadowOpacity: 1,
            // shadowRadius: 16,
          }}>
          <IconButton
            size={scaleSize(36)}
            icon={
              <Ionicons name='search' size={24} color={COLORS.dark_gray_2} />
            }
          />
        </Neumorph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gray_1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleSize(24),
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black_1,
  },
  headerLeft: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: scaleSize(10),
  },
  headerRight: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: scaleSize(10),
    backgroundColor: 'red',
  },
});
export default ExploreHeaderTitle;
