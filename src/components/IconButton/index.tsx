import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface IProps extends TouchableWithoutFeedbackProps {
  icon: React.ReactNode;
}

const IconButton: React.FC<IProps> = (props) => {
  const { icon, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[
        {
          width: scaleSize(42),
          height: scaleSize(42),
          backgroundColor: COLORS.white_3,
          borderRadius: scaleSize(42) / 2,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
        },
      ]}
      {...otherProps}>
      {/* FIXME: ICON */}
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
