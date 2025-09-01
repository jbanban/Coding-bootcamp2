import React from "react";
import { Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function ClinicDashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Clinic App Dashboard</Text>

      {/* Appointment Booking */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Booking")}>
        <Text style={styles.cardTitle}>📅 Book Appointment</Text>
        <Text style={styles.cardDesc}>Simple appointment booking with real-time slots</Text>
      </TouchableOpacity>

      {/* Reminders */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Reminders")}>
        <Text style={styles.cardTitle}>🔔 Reminders</Text>
        <Text style={styles.cardDesc}>Get automated reminders for appointments</Text>
      </TouchableOpacity>

      {/* Patient Management */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Patients")}>
        <Text style={styles.cardTitle}>🧑 Patients</Text>
        <Text style={styles.cardDesc}>Manage patient bookings and history</Text>
      </TouchableOpacity>

      {/* Clinic Management */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Clinics")}>
        <Text style={styles.cardTitle}>👨‍⚕️ Clinics</Text>
        <Text style={styles.cardDesc}>Clinic schedules and subscriptions</Text>
      </TouchableOpacity>

      {/* Payments */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Payments")}>
        <Text style={styles.cardTitle}>💳 Payments</Text>
        <Text style={styles.cardDesc}>Commission & subscription plans</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
  },
});
