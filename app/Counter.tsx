import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appearance, useColorScheme, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Counter() {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === 'light' ? 
      styles.lightContainer : 
      styles.darkContainer;

  const [orientationIsLandscape,setOrientation]=useState(true)
  const [currentCount, setCurrentCount] = useState(0);

  const onIncrementCounter = () => {
    setCurrentCount(currentCount+1);
  };

  const onDecrementCounter = () => {
    setCurrentCount(currentCount-1);
  };

  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, themeContainerStyle]}>
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
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  lightContainer: {
    backgroundColor: '#006EFF',
  },
  darkContainer: {
    backgroundColor: '#000000',
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
