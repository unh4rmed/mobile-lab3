import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Импорт иконок
import AboutMe from './screens/AboutMe';
import MyProgrammingLanguages from './screens/MyProgrammingLanguages';
import NotFound from './screens/NotFound';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'О Себе') {
              iconName = 'person';
            } else if (route.name === 'Мои языки программирования') {
              iconName = 'code-slash';
            } else if (route.name === 'Не найдено') {
              iconName = 'alert';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="О Себе" component={AboutMe} />
        <Tab.Screen name="Мои языки программирования" component={MyProgrammingLanguages} />
        <Tab.Screen name="Не найдено" component={NotFound} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
