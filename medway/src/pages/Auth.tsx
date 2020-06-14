import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Modal, ActivityIndicator } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  RectButton,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Props {
  prefix?: string;
  phone?: string;
  code?: number[];
}

const Auth = () => {
  const navigation = useNavigation();

  const route = useRoute();
  let params: Props | undefined = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (modalVisible == true) {
      setTimeout(() => {
        if (params != undefined) params.code = numbers;

        navigation.navigate("InfoRegister", params);

        setModalVisible(false);
      }, 3000);
    }
  }, [modalVisible]);

  useEffect(() => {
    reSendCode();
  }, []);

  const reSendCode = () => {
    setLoading(true);
    setTimeout(() => {
      let random = [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1,
      ];
      setNumbers(random);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {isLoading && (
        <Modal animationType="none" transparent={true} visible={isLoading}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              flex: 1,
              backgroundColor: "#00000090",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                flexDirection: "row",
              }}
            >
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={{ marginRight: 20 }}
              />
              <Text>Recebendo código...</Text>
            </View>
          </View>
        </Modal>
      )}

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
            para{" "}
            <Text style={{ fontWeight: "bold" }}>
              {`+${params?.prefix}`} {`${params?.phone}`}
            </Text>
          </Text>
        </View>

        <View style={styles.codeContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={String(numbers[0]) || ""}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={String(numbers[1]) || ""}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={String(numbers[2]) || ""}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={String(numbers[3]) || ""}
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
    marginTop: 32,
  },
  modalDescription: {
    color: "#fff",
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
