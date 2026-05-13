import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [name, setName] = useState<string>(''); // Added <string> for TypeScript

  return (
    <View style={styles.screen}>
      <Image
        source={require('@/assets/images/profile.jpg')}
        style={styles.photo}
      />

      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Text style={styles.name}>
        Hello, {name}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff' 
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 5,
  }
});