import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Logo or Placeholder Image */}
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.logo} />
      
      {/* Title & Subtitle */}
      <Text style={styles.title}>Welcome to DevGracies App</Text>
      <Text style={styles.subtitle}>Explore and connect with us!</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/DevGracies/mobile.git')}>
        <Text style={styles.buttonText}>📂 Visit GitHub Repo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://hng.tech')}>
        <Text style={styles.buttonText}>🚀 Visit HNG Hire Pages</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
