import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const CustomAlert = ({ message, buttons = [] }) => {
  if (!message) return null; 

  return (
    <View style={styles.overlay}>
      <View style={styles.alertBox}>
        <Text style={styles.message}>{message}</Text>
        {buttons.map((button, index) => (
          <TouchableOpacity key={index} onPress={button.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    maxWidth: '80%',
  },
  message: {
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    minWidth: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomAlert;
