import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../../components/Avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/vitoriacst.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        ola
                    </Text>
                    <Text style={styles.username}>
                        vitoria
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje e dia de vida
                </Text>
            </View>
        </View>
    )
}