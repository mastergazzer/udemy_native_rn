import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";
const CategoriesMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cate => cate.id === catId);
  //useSelector(state=> state.<reducer identifier from app.js>.<state names from reducer  meals.js>);
  const avalailableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = avalailableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found on filtered</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoriesMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cate => cate.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoriesMealsScreen;
