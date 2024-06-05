// navigation/types.ts
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; otherParam: string };
  FilterScreen: undefined
};

type HomeScreenNavigationProp = DrawerNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
  
};
