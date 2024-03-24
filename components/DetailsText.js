import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Genre from "./Genre";

const DetailsText = ({ title, description, genres }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.details__title}>{title}</Text>
      <Genre genres={genres} />
      <Text style={styles.details__description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    position: "absolute",
    paddingHorizontal: 25,
    marginTop: 100,
  },
  details__title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F2F2F2",
  },
  details__description: {
    color: "#F2F2F2",
    fontSize: 16,
  },
});

export default DetailsText;
