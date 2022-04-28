import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../assets/illustration.png';
import { StatusBar } from 'react-native';

import { ButtonIcon } from '../components/ButtonIcon'

export function SignIn() {
    return (
        <View style={ styles.container }>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor='transparent' 
            translucent/>
            <Image source={ IllustrationImg } style={styles.image} resizeMode="stretch" />
            <View style={styles.content}>
                <Text style={styles.title}>
                     Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    crie grupos para seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            <ButtonIcon 
            title="entrar com o discord"
            activeOpacity={0.7}
            />
            </View>
        </View>
    )
}
