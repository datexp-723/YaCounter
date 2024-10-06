import { Platform, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Link, Slot, Tabs, useNavigation, useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const router = useRouter();
    const navigation = useNavigation();

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });

      useEffect(() => {
        if (loaded) {
          SplashScreen.hideAsync();
          router.push("/Counter");
        }
      }, [loaded]);
    
      if (!loaded) {
        return null;
      }

    if (Platform.OS === 'web') {
        return (
          <View style={{ flex: 1 }}>
            <header>
              <Link href="/Counter">Counter</Link>
              <Link href="/PrivacyPolicy">Imprint</Link>
            </header>
            <Slot/>
          </View>
        );
      }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="Counter" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Counter',
            title: 'Counter',
          }}
        />
        <Drawer.Screen
          name="PrivacyPolicy" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Privacy Policy',
            title: 'Privacy Policy',
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}