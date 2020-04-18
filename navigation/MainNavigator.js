import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesOverviewScreen from '../screens/products/CategoriesOverviewScreen';
import Colors from '../constants/Colors';

const MainNavigator = createStackNavigator({
    CategoriesOverview: CategoriesOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintStyle: {
            fontFamily: 'Arial'
        },
        headerBackTitleStyle: {
            fontFamily: 'Arial'
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(MainNavigator);