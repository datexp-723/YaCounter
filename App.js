import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {

  const [orientationIsLandscape,setOrientation]=useState(true)
  const [currentCount, setCurrentCount] = useState(0);

  const onIncrementCounter = () => {
    setCurrentCount(currentCount+1);
  };

  const onDecrementCounter = () => {
    setCurrentCount(currentCount-1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{currentCount}</Text>
      </View>
      <View style={styles.counter}>
            <IconButton icon="minus-thick" 
                        iconColor="white"
                        size={100}
                        style={styles.image}
                        onPress={() => onDecrementCounter()} />
            <IconButton icon="plus-thick"
                        iconColor="white"         
                        size={100}
                        style={styles.image}
                        onPress={() => onIncrementCounter()} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006EFF',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    marginLeft: 25,
    marginRight: 25,
  },
  counter: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 2,
    color: '#fff',
    fontSize: 150,
    fontWeight: 'bold',
    justifyContent: "center",
  },
  title: {
    color: '#fff',
    fontSize: 150,
    fontWeight: 'bold',
  },
});
