import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BranchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Branch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BranchScreen;
