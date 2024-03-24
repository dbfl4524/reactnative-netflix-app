import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const PlayButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <AntDesign name="caretright" size={24} />
        <Text style={styles.buttonText}>Play</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "#FCFFFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PlayButton;
