import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title.toUpperCase()}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration}min</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: Colors.accentColor,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    flexDirection: "row"
  },
  detailText: {
    fontFamily: "josefin-regular"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  title: {
    fontFamily: "josefin-bold-italic",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default MealItem;
