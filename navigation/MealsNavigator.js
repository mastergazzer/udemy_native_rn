import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  StackViewTransitionConfigs
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "black",
  headerTitleStyle: {
    textAlign: "left",
    flex: 1,
    fontFamily: "josefin-bold",
    fontWeight: "200"
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    mode: "card",
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,

    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    mode: "card",
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,

    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "white",
      tabBarLabel: <Text style={{ fontFamily: "josefin-bold" }}>Meals</Text>
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "white",
      tabBarLabel: <Text style={{ fontFamily: "josefin-bold" }}>Favorites</Text>
    }
  }
};

const icon = () => {
  return <Ionicons name="ios-restaurant" size={25} color="black" />;
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.primaryColor,
        inactiveColor: "grey",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
          showLabel: false
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    mode: "card",
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,

    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
        drawerIcon: icon
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: "white",
      labelStyle: {
        fontFamily: "open-sans",
        fontSize: 20,
        fontWeight: "200"
      }
    },
    drawerBackgroundColor: Colors.primaryColor
  }
);
export default createAppContainer(MainNavigator);
