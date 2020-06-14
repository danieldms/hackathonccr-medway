import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const PhoneRegister = () => {
    const navigation = useNavigation();

    const goNext = () => {
        navigation.navigate("Auth");
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name="x-circle" size={24} color="#092E63" />
                </TouchableOpacity>

                <View style={styles.contentTitle}>
                    <Text style={styles.title}>Registre-se</Text>
                    <Text style={styles.description}>Informe o código do país e digite o número do seu telefone. </Text>
                </View>

                <View style={styles.phoneContainer}>
                    <TextInput placeholder="+55" style={{width: 50, borderBottomWidth: 1, borderBottomColor:"#092E63", marginRight: 20}}></TextInput>
                    <TextInput placeholder="Seu número" style={styles.input}></TextInput>
                </View>

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={goNext}>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </RectButton>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
    contentTitle: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40
    },
    title:{
        color:"#092E63",
        fontSize: 32,
        marginTop: 16,
        marginBottom: 16
    },
    description: {
        paddingHorizontal: 24,
        textAlign: "center"
    },
    phoneContainer: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: 'stretch'
    },
    input: {
        flex: 1,
        color: "#092E63",
        borderBottomWidth: 1, 
        borderBottomColor:"#092E63", 
        fontSize: 18
    },
    footer: {
        marginTop: 32
    },

    button: {
        backgroundColor: "#4A6DD9",
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    }
});

export default PhoneRegister;