import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WorkshopDetail from '../screens/WorkshopDetails';

// Import screens
import Challenge from '../screens/Challenge';
import Home from '../screens/Home';
import Koleksi from '../screens/Koleksi';
import Profile from '../screens/Profile';
import Workshop from '../screens/Workshop';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function WorkshopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkshopList" component={Workshop} />
      <Stack.Screen name="WorkshopDetail" component={WorkshopDetail} />
    </Stack.Navigator>
  );
}

export default function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Workshop') {
            iconName = focused ? 'hammer' : 'hammer-outline';
          } else if (route.name === 'Koleksi') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Challenge') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#6C63FF',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Workshop" component={WorkshopStack} />
      <Tab.Screen name="Koleksi" component={Koleksi} />
      <Tab.Screen name="Challenge" component={Challenge} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}