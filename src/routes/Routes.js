import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AppImages } from '../utils';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer >
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Image source={AppImages.home} />
          ),
        }}
      />
       <Tab.Screen
        name="Friends"
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Image source={AppImages.friends} />
          ),
        }}
      />
        <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Image source={AppImages.messages} />
          ),
        }}
      />
        <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Image source={AppImages.search} />
          ),
        }}
      />
        <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Image source={AppImages.profile} />
          ),
        }}
      />
      {/* <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Home3" component={HomeScreen} />
      <Tab.Screen name="Home4" component={HomeScreen} />
      <Tab.Screen name="Home5" component={HomeScreen} /> */}
    </Tab.Navigator>
    </NavigationContainer>

  );
}

export default Routes;