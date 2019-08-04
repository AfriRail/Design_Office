
import {createSwitchNavigator} from 'react-navigation'

import AppDrawerNavigator from './AppDrawerNavigator'

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard2: AppDrawerNavigator
});

export default AppSwitchNavigator;
