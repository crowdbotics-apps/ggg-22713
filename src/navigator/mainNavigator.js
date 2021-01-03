import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2189966Navigator from '../features/SignIn2189966/navigator';
import Maps175055Navigator from '../features/Maps175055/navigator';
import Additem175054Navigator from '../features/Additem175054/navigator';
import Maps175050Navigator from '../features/Maps175050/navigator';
import UserProfile175046Navigator from '../features/UserProfile175046/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2189966: { screen: SignIn2189966Navigator },
Maps175055: { screen: Maps175055Navigator },
Additem175054: { screen: Additem175054Navigator },
Maps175050: { screen: Maps175050Navigator },
UserProfile175046: { screen: UserProfile175046Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
