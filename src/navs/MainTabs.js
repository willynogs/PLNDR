import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import CalendarStack from './CalendarStack';
import ProfileStack from './ProfileStack';

export default TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Calendar: {
    screen: CalendarStack,
    navigationOptions: {
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  }
});
