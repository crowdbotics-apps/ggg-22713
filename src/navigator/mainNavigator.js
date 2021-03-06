import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings194028Navigator from '../features/Settings194028/navigator';
import BlankScreen63194025Navigator from '../features/BlankScreen63194025/navigator';
import Settings189978Navigator from '../features/Settings189978/navigator';
import UserProfile189971Navigator from '../features/UserProfile189971/navigator';
import Settings189970Navigator from '../features/Settings189970/navigator';
import Settings189968Navigator from '../features/Settings189968/navigator';
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
Settings194028: { screen: Settings194028Navigator },
BlankScreen63194025: { screen: BlankScreen63194025Navigator },
Settings189978: { screen: Settings189978Navigator },
UserProfile189971: { screen: UserProfile189971Navigator },
Settings189970: { screen: Settings189970Navigator },
Settings189968: { screen: Settings189968Navigator },
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
