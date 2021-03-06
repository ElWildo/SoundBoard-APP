import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollView from "./components/ScrollView";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
