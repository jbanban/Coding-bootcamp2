import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>The Business Model Canvas</Text>
      <Text style={styles.subtitle}>Date: 08/27/2025 | Version: 1.0</Text>

      {/* Grid Layout */}
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.heading}>Key Partners</Text>
          <Text>• Clinics</Text>
          <Text>• IT support</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Key Activities</Text>
          <Text>• Basic app development</Text>
          <Text>• User support</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Value Propositions</Text>
          <Text>• Simple appointment booking</Text>
          <Text>• Real-time slot availability</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.heading}>Key Resources</Text>
          <Text>• App development team</Text>
          <Text>• Cloud hosting</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Customer Relationships</Text>
          <Text>• Self-service app</Text>
          <Text>• Automated reminders</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Customer Segments</Text>
          <Text>• Patients</Text>
          <Text>• Clinics</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.heading}>Cost Structure</Text>
          <Text>• Development costs</Text>
          <Text>• Basic support costs</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Revenue Streams</Text>
          <Text>• Commission per booking</Text>
          <Text>• Clinic subscription</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "gray",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  box: {
    flex: 1,
    minWidth: "30%",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
