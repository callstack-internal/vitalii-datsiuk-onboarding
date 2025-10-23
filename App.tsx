/**
 * Created by Vitalii Datsiuk on 22.10.2025.
 */

import { StatusBar, useColorScheme } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';

import ListScreen from './src/screens/List';
import { queryClient } from './src/api/client';
import DetailsScreen from './src/screens/Details';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'List',
  screens: {
    List: ListScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
