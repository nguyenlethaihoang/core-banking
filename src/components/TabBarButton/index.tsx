import { scaleSize } from '@core/utils';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@src/assets/const';
import Neumorph from '../Neumorph';

const TabBarButton: React.FC<BottomTabBarButtonProps> = (props) => {
  const { style, children, ...otherProps } = props;
  const selected = props.accessibilityState?.selected;
  return (
    <View style={style}>
      <TouchableOpacity {...otherProps} activeOpacity={0.9}>
        {selected ? (
          <View
            style={[
              styles.button,
              {
                elevation: 0,
                backgroundColor: COLORS.white_3,
                borderWidth: 1,
                borderColor: COLORS.dark_gray_2,
              },
            ]}>
            {children}
          </View>
        ) : (
          <Neumorph>
            <LinearGradient
              // Button Linear Gradient
              colors={['#FFFFFF4D', '#E9F0F7']}
              start={{
                x: 0.1,
                y: 0.05,
              }}
              end={{
                x: 0.5,
                y: 0.5,
              }}
              style={[styles.button]}>
              {children}
            </LinearGradient>
          </Neumorph>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleSize(42),
    height: scaleSize(42),
    borderRadius: scaleSize(40) / 2,
    marginVertical: scaleSize(11),
    elevation: 6,
  },
});
export default TabBarButton;
