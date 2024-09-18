import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

export default function App() {

  const [currentCount, setCurrentCount] = useState(0);

  const onIncrementCounter = () => {
    setCurrentCount(currentCount+1);
  };

  const onDecrementCounter = () => {
    setCurrentCount(currentCount-1);
  };

  return (
    <View style={styles.container}>
    
          <IconButton icon="minus-thick" 
                      size={200}
                      iconColor="white"
                      style={styles.image}
                      onPress={() => onDecrementCounter()}
          />
          <Text style={styles.title}>{currentCount}</Text>
          <IconButton icon="plus-thick" 
                      size={200}
                      iconColor="white"
                      style={styles.image}
                      onPress={() => onIncrementCounter()}
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 100
  },
  image: {
  },
  title: {
    color: '#fff',
    fontSize: 300,
    fontWeight: 'bold'
  },
});
