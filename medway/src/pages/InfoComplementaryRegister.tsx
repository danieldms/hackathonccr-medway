import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  RectButton,
} from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Props {
  prefix?: string;
  phone?: string;
  code?: number[];
  name?: string;
  gender?: string;
  weight?: string;
  height?: string;
}

interface Dados {
  weight?: string;
  height?: string;
}

const InfoComplementaryRegister = () => {
  const navigation = useNavigation();

  const route = useRoute();
  let params: Props | undefined = route.params;

  const [input, setInput] = useState<Dados>();
  const [check, setCheck] = useState(false);

  const goNext = () => {
    if (params != undefined) {
      params.weight = input?.weight;
      params.height = input?.height;
    }

    navigation.navigate("InfoDateRegister");
  };

  useEffect(() => {
    setCheck((input?.weight != "" && input?.height != "") || false);
  }, [input]);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left-circle" size={24} color="#092E63" />
        </TouchableOpacity>

        <View style={styles.contentTitle}>
          <View style={{}}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.description}>Dados complementares</Text>
          </View>
          <View>
            <Text style={styles.title}>
              2/<Text style={{ fontSize: 24, fontWeight: "300" }}>3</Text>
            </Text>
            <Text style={styles.description}>etapas</Text>
          </View>
        </View>
        
        <KeyboardAvoidingView>  
        <View style={styles.fieldsContainer}>
          <TextInput
            placeholder="0.00 kg"
            style={styles.input}
            maxLength={5}
            onChangeText={(name: string) => {
              setInput({ ...input, weight: name });
            }}
            keyboardType="number-pad"
          ></TextInput>
          <TextInput
            placeholder="190 cm"
            style={styles.input}
            maxLength={3}
            onChangeText={(name: string) => {
              setInput({ ...input, height: name });
            }}
            keyboardType="number-pad"
          ></TextInput>
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={goNext} enabled={check}>
            <Text style={styles.buttonText}>Avançar</Text>
          </RectButton>
        </View>
        </KeyboardAvoidingView>
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
  contentTitle: {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    color: "#092E63",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {},
  fieldsContainer: {
    marginTop: 16,
    flexDirection: "column",
    alignItems: "stretch",
  },
  input: {
    color: "#092E63",
    marginBottom: 20,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#092E63",
    fontSize: 18,
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

export default InfoComplementaryRegister;
