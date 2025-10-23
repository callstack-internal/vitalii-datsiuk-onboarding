/**
 * Created by Vitalii Datsiuk on 22.10.2025.
 */

import "./global.css"
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { queryClient } from '@api/client';
import RootNavigation from './src/navigation/root';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <RootNavigation /> */}
        <View style={{flex: 1, backgroundColor: 'blue', paddingTop:100}}>
          <Text className="text-2xl font-bold text-red-500 ml-10">asd</Text>
        </View>
      </SafeAreaProvider>
    // </QueryClientProvider>
  );
};

export default App;
