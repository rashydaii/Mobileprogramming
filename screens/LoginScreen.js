import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('Rashy');
  const [password, setPassword] = useState('HellboundMC');

  const handleSignIn = () => {
    // Add your authentication logic here
    if (username && password) {
      // Navigate to main app after successful login
      // navigation.navigate('Home');
      console.log('Sign In:', { username, password });
    }
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    console.log('Forgot Password clicked');
  };

  const handleRequestToJoin = () => {
    // Navigate to registration screen
    console.log('Request to Join clicked');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>HELLBOUND</Text>
            <Text style={styles.logoSubtext}>MC</Text>
            <Text style={styles.logoTextSmall}>KATHMANDU</Text>
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>HELLBOUND MC</Text>
      <Text style={styles.subtitle}>Bound for Redemption</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity 
        style={styles.signInButton} 
        onPress={handleSignIn}
        activeOpacity={0.8}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Request to Join */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Not a member yet? </Text>
        <TouchableOpacity onPress={handleRequestToJoin}>
          <Text style={styles.requestToJoin}>Request to Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBorder: {
    borderWidth: 3,
    borderColor: '#ff0000',
    borderRadius: 8,
    padding: 20,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  logoSubtext: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  logoTextSmall: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#ff0000',
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 16,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  signInButton: {
    backgroundColor: '#ff0000',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 14,
  },
  requestToJoin: {
    color: '#ff0000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});