import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawerContentComponent from './CustomDrawerContentComponent';
import CategoriesOverviewScreen from '../screens/products/CategoriesOverviewScreen';
import IndexScreen from '../screens/IndexScreen';
import ProductsOverviewScreen from '../screens/products/ProductsOverviewScreen';
import Colors from '../constants/Colors';


const ShopNavigator = createStackNavigator(
    {
        Index: IndexScreen,
        CategoriesOverview: CategoriesOverviewScreen,
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