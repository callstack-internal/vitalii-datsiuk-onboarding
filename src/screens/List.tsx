import React, { type FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, StyleSheet } from 'react-native';

const ListScreen: FC = () => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.screen}>
      <Text>List page</Text>
      <Button title="Go to Details" onPress={navigateToDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ListScreen;
