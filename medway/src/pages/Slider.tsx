import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const slides = [
    {
      title: 'Bem vindo',
      subtitle: 'Condições para quem conduz.\nViva melhor seu caminho!',
      backgroundColor: '#1D3273',
      image: (
        <View>
            <Image style={{marginBottom: 32}}  source={require('../assets/logo.png')} />
            <Image source={require('../assets/slider_01.png')} />
        </View>
        )
    }
];
  
const Slider = () => {
    const navigation = useNavigation();

    const onDone = () => {
        navigation.navigate('PhoneRegister');
    };

    return (
        <Onboarding
            onDone={onDone}
            pages={slides}
            titleStyles={styles.title}
            imageContainerStyles={{paddingBottom: 30, marginTop: -100, padding: 0}}
        />
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "600",
        color: 'white',
    },
    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
  });

export default Slider;