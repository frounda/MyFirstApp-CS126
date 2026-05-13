import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Requirement for the lab: Dynamic message
  const message = count > 0 
    ? `${name}, you tapped ${count} times!` 
    : "Tap the + button to start";

  return (
    <View style={styles.container}>
      {/* Use the profile.jpg from your assets */}
      <Image 
        source={require('../../assets/images/profile.jpg')} 
        style={styles.image} 
      />

      <TextInput 
        placeholder="Type your name..." 
        onChangeText={setName} 
        style={styles.input}
      />

      <Text style={styles.greeting}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>

      {/* The message you've been looking for */}
      <Text style={styles.messageText}>{message}</Text>

      <View style={styles.buttonRow}>
        <Button title=" + " onPress={() => setCount(count + 1)} color="#2196F3" />
        <View style={{ width: 10 }} />
        <Button title=" - " onPress={() => setCount(count - 1)} color="#2196F3" />
        <View style={{ width: 10 }} />
        <Button title="Reset" onPress={() => setCount(0)} color="#F44336" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    padding: 20 
  },
  image: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    width: '100%', 
    padding: 12, 
    marginBottom: 20, 
    borderRadius: 8,
    borderColor: '#ccc'
  },
  greeting: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  messageText: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 30,
    textAlign: 'center'
  },
  buttonRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  }
});