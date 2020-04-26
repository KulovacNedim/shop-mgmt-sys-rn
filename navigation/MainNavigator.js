import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawerContentComponent from './mainSideDrawer/CustomDrawerContentComponent';
import IndexScreen from '../screens/IndexScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ShopNavigator = createStackNavigator(
    {
        Index: IndexScreen,
        ProductsOverview: ProductsOverviewScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintStyle: {
                fontFamily: 'semi-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'semi-bold'
            },
            headerTintColor: 'white'
        }
    }
);

const SideDrawer = createDrawerNavigator(
    {
        Shop: ShopNavigator,
        CustomDrawerContentComponent: CustomDrawerContentComponent
    },
    {
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent
    }
);

export default createAppContainer(SideDrawer);