import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawerContentComponent from './mainSideDrawer/CustomDrawerContentComponent';
import IndexScreen from '../screens/IndexScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import AdminProductsScreen from '../screens/admin/AdminProductsScreen';
import EditProductScreen from '../screens/admin/EditProductScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
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
};

const ShopNavigator = createStackNavigator(
    {
        Index: IndexScreen,
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
        Orders: OrdersScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const AdminNavigator = createStackNavigator(
    {
        AdminProducts: AdminProductsScreen,
        ProductDetail: ProductDetailScreen,
        EditProduct: EditProductScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const SideDrawer = createDrawerNavigator(
    {
        Shop: ShopNavigator,
        Orders: OrdersNavigator,
        Admin: AdminNavigator,
        CustomDrawerContentComponent: CustomDrawerContentComponent
    },
    {
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent
    }
);

export default createAppContainer(SideDrawer);