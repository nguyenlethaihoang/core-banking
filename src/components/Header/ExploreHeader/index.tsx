import { scaleSize } from '@core/utils';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { COLORS, FONTS } from '@src/assets/const';
import { Stack } from '@src/components';
import Button from '@src/components/Button';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
const ExploreHeader: React.FC<NativeStackHeaderProps> = (props) => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.header}>
      {/* FIXME: Change to Button component */}
      <Button title={'Event'} onPress={() => Alert.alert('test')} />
      <Button title={'Event'} onPress={() => Alert.alert('test')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    backgroundColor: COLORS.gray_1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(20),
    marG: scaleSize(20),
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
export default ExploreHeader;
