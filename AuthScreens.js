import { HomeScreen } from "./src/screens/HomeScreen";
import { ProductsScreen } from "./src/screens/ProductsScreen";
import { SupportScreen } from "./src/screens/SupportScreen";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {ProfileScreen} from "./src/screens/ProfileScreen";
import {
    HomeFilled,
    HomeOutline,
    ProductsFilled,
    ProductsOutline,
    ProfileFilled, ProfileOutline,
    SupportFilled,
    SupportOutline
} from "./Icons";

export function AuthScreens(){
    const Tab = createBottomTabNavigator();

    return(
       <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#4F94E5',
              tabBarInactiveTintColor: '#4F94E5',
              tabBarStyle: {
                  height: 90,
              },
              tabBarIconStyle: {
                  marginTop: 10,
                  height: 30,
              },
              tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: 'rgba(0,0,0, 0.38)',
                  marginTop: 5,
              }

          }}
      >
          <Tab.Screen
              name="Ana Sayfa"
              component={HomeScreen}
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                      if (focused) {
                          return <HomeFilled size={28} fill={color}/>
                      }
                      return <HomeOutline size={28}  />
                  }
              }}
          />
          <Tab.Screen
              name="Ürünler"
              component={ProductsScreen}
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                      if (focused) {
                          return <ProductsFilled     size={28} fill={color}/>
                      }
                      return <ProductsOutline size={28}  />
                  },

              }}

          />
          <Tab.Screen
              name="Destek"
              component={SupportScreen}
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                      if (focused) {
                          return <SupportFilled     size={28} fill={color}/>
                      }
                      return <SupportOutline size={28} fill={color} />
                  }
              }}
          />
          <Tab.Screen
              name="Profil"
              component={ProfileScreen}
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                      if (focused) {
                          return <ProfileFilled size={28} fill={color}/>
                      }
                      return <ProfileOutline size={28} fill={color} />
                  }
              }}
          />

      </Tab.Navigator>
    )
}