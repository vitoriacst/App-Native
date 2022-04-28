import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
    return (
            <Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <Screen
                    name='SignIn'
                    component={SignIn}
                />
                <Screen
                    name='Home'
                    component={Home}
                />

            </Navigator>
    )
}