/**
 * Created by Vitalii Datsiuk on 22.10.2025.
 */

import { StatusBar, useColorScheme } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from '@api/client';
import RootNavigation from '@/navigation/root';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
