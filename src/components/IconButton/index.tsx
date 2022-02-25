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
  size?: number;
}

const IconButton: React.FC<IProps> = (props) => {
  const { icon, size, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[
        {
          width: size || scaleSize(36),
          height: size || scaleSize(36),
          backgroundColor: COLORS.white_3,
          borderRadius: (size || scaleSize(36)) / 2,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 6,
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
