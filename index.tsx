import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBox, setActiveBox] = useState<"Home" | "Events" | "Contact" | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkPress = (linkName: "Home" | "Events" | "Contact") => {
    setActiveBox(linkName);
    Alert.alert("Selection", `${linkName} clicked!`);
    setMenuOpen(false);
  };

  const showAlert = () => Alert.alert("Welcome", "Welcome to Hellbound MC!");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.logoText}>HELLBOUND MC</Text>
      </View>

      {/* Hamburger Menu */}
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
        <View style={[styles.bar, menuOpen && styles.barOpen]} />
        <View style={[styles.bar, menuOpen && styles.barOpen]} />
        <View style={[styles.bar, menuOpen && styles.barOpen]} />
      </TouchableOpacity>

      {/* Menu */}
      {menuOpen && (
        <View style={styles.menu}>
          <ScrollView>
            {(['Home', 'Events', 'Contact'] as const).map((item) => (
              <TouchableOpacity 
                key={item} 
                onPress={() => handleLinkPress(item)}
                style={styles.menuItem}
              >
                <Text style={styles.menuItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>HELLBOUND MC</Text>
        <Text style={styles.subtitle}>BOUND FOR REDEMPTION</Text>
        <TouchableOpacity onPress={showAlert} style={styles.button}>
          <Text style={styles.buttonText}>WELCOME HERE</Text>
        </TouchableOpacity>
      </View>

      {/* Boxes for Home / Events / Contact */}
      <ScrollView contentContainerStyle={styles.boxContainer}>
        {(['Home', 'Events', 'Contact'] as const).map((box) => (
          <TouchableOpacity
            key={box}
            onPress={() => handleLinkPress(box)}
            style={[
              styles.box,
              activeBox === box && styles.activeBox
            ]}
          >
            <Text style={styles.boxText}>{box}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#000',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburger: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  bar: {
    width: 25,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 3,
  },
  barOpen: {
    backgroundColor: '#ff0000',
  },
  menu: {
    backgroundColor: '#000',
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    alignItems: 'center',
    padding: 40,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ff0000',
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  box: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    minWidth: 100,
  },
  activeBox: {
    backgroundColor: '#ff0000',
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});