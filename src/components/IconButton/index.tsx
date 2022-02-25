import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedbackProps} from 'react-native';

interface IProps extends TouchableWithoutFeedbackProps {}

const IconButton: React.FC<IProps> = props => {
    const {...otherProps} = props;
    return (
        <TouchableOpacity
            style={[
                {
                    width: scaleSize(40),
                    height: scaleSize(40),
                    backgroundColor: COLORS.white_3,
                    borderRadius: scaleSize(40) / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 10,
                },
            ]}
            {...otherProps}>
            {/* FIXME: ICON */}
            <Text>T</Text>
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({});
