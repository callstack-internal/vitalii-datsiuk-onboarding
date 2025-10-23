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
        <View className="bg-blue-500 w-10 h-10"></View>
      <Text className="text-red-500 text-2xl font-bold mt-10 ml-10">List page</Text>
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
