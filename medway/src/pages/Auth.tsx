import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Modal } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  RectButton,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if(modalVisible == true) {
      setTimeout(()=> {
        navigation.navigate('InfoRegister');

        setModalVisible(false);
      }, 3000)
    }
  }, [modalVisible]);

  const reSendCode = () => {};

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
						<Icon name="check-circle" size={172} color="#FFF" />
						<Text style={styles.modalTitle}>Sucesso</Text>
						<Text style={styles.modalDescription}>Telefone autenticado.</Text>
        </View>
      </Modal>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left-circle" size={24} color="#092E63" />
        </TouchableOpacity>

        <View style={styles.contentTitle}>
          <Text style={styles.title}>Autenticação</Text>
          <Text style={styles.description}>Digite o código enviado</Text>
          <Text>
            para <Text style={{ fontWeight: "bold" }}>+55 (83) 98765-2333</Text>
          </Text>
        </View>

        <View style={styles.codeContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
          ></TextInput>
        </View>

        <RectButton style={styles.buttonCodigo} onPress={reSendCode}>
          <Text style={styles.buttonTextCodigo}>Reenviar código</Text>
        </RectButton>

        <View style={styles.footer}>
          <RectButton
            style={styles.button}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
	},
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
    flexDirection: "column",
		backgroundColor: "#1D3273",
	},
	modalTitle: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 8,
		marginTop: 32
	},
	modalDescription: {
		color: "#fff"
	},
  contentTitle: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#092E63",
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
  },
  description: {
    paddingHorizontal: 32,
    textAlign: "center",
  },
  codeContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: 64,
    color: "#092E63",
    borderWidth: 1,
    borderRadius: 10,
    borderBottomColor: "#092E63",
    fontSize: 18,
    height: 64,
    paddingHorizontal: 24,
  },
  buttonCodigo: {
    backgroundColor: "transparent",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonTextCodigo: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#4EBFB4",
    fontSize: 16,
  },
  footer: {
    marginTop: 32,
  },

  button: {
    backgroundColor: "#4A6DD9",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});

export default Auth;
