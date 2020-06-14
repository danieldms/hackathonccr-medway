import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const InfoComplementaryRegister = () => {
    const navigation = useNavigation();

    const goNext = () => {
        navigation.navigate("InfoDateRegister");
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name="arrow-left-circle" size={24} color="#092E63" />
                </TouchableOpacity>

                <View style={styles.contentTitle}>
                    <View style={{ }}>
                        <Text style={styles.title}>Cadastro</Text>
                        <Text style={styles.description}>Dados complementares</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>2/<Text style={{fontSize: 24, fontWeight:"300"}}>3</Text></Text>
                        <Text style={styles.description}>etapas</Text>
                    </View>
                </View>

                <View style={styles.fieldsContainer}>
                    <TextInput placeholder="0,00 kg" style={styles.input} keyboardType="number-pad"></TextInput>
                    <TextInput placeholder="190 cm" style={styles.input} keyboardType="number-pad"></TextInput>
                </View>

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={goNext}>
                        <Text style={styles.buttonText}>Avançar</Text>
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
        flexDirection: "row",
        textAlign: "left",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 40
    },
    title:{
        color:"#092E63",
        fontSize: 32,
        fontWeight:"bold"
    },
    description: {
    },
    fieldsContainer: {
        marginTop: 16,
        flexDirection: "column",
        alignItems: 'stretch'
    },
    input: {
        color: "#092E63",
        marginBottom: 20,
        height: 40,
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

export default InfoComplementaryRegister;