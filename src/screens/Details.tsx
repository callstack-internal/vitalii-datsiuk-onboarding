import React, { type FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DetailsScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Details page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default DetailsScreen;
