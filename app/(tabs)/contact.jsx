import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import icedCoffeeImg from "../../assets/images/iced-coffee.png";

const contact = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Coffee Shop</Text>
          <Text style={styles.description}>The best brew in town!</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoText}>123 Brew St, Bean City</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Opening Hours:</Text>
            <Text style={styles.infoText}>Mon-Fri: 7am - 6pm</Text>
            <Text style={styles.infoText}>Sat-Sun: 8am - 4pm</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Contact:</Text>
            <Text style={styles.infoText}>+1 (555) 123-4567</Text>
            <Text style={styles.infoText}>info@coffeeshop.com</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { flex: 1, justifyContent: "center" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 15,
  },
  infoLabel: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "600",
  },
  infoText: {
    color: "white",
    fontSize: 16,
  },
});
