import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SpalshScreen from "expo-splash-screen"

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return <Stack />
}

export default Layout;