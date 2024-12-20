import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Vladimir Krasnov (3107D)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});
