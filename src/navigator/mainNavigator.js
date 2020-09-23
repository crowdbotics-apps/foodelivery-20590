import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps106160Navigator from '../features/Maps106160/navigator';
import Add-Item106159Navigator from '../features/Add-Item106159/navigator';
import Maps106155Navigator from '../features/Maps106155/navigator';
import UserProfile106151Navigator from '../features/UserProfile106151/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps106160: { screen: Maps106160Navigator },
Add-Item106159: { screen: Add-Item106159Navigator },
Maps106155: { screen: Maps106155Navigator },
UserProfile106151: { screen: UserProfile106151Navigator },

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
