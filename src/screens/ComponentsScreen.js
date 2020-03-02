import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Zac';

  return (
    <View>
      <Text style={styles.textH1}>Getting started with React </Text>
      <Text style={styles.textH2}>{myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textH1: {
    fontSize: 45
  },
  textH2: {
    fontSize: 20
  }
});

export default ComponentsScreen;
