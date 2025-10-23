import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';

import ListScreen from '../screens/List';
import DetailsScreen from '../screens/Details';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'List',
  screens: {
    List: ListScreen,
    Details: DetailsScreen,
  },
});

export const RootNavigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default RootNavigation;
