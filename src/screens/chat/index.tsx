import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Test from './Test';

type Props = {};

const ChatScreen = (props: Props) => {
  return (
    <View>
      <Test />
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
