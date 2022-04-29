import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';


export function SignIn() {
    const navigation=useNavigation()

    function handleSignIn(){
        navigation.navigate('Home');
    }
    return (
        <View style={ styles.container }>
            <Image source={ IllustrationImg } style={styles.image} resizeMode="stretch" />
            <View style={styles.content}>
                <Text style={styles.title}>
                     Conecte-se e organize{`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    crie grupos para seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            <ButtonIcon 
            title ="entrar com o discord"
            onPress={handleSignIn}
            />
            </View>
        </View>
    )
}
