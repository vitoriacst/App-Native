import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import Background from "../components/background";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return(
    <Background>
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    </Background>
    )
}
