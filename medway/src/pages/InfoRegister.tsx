import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Picker } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  RectButton,
} from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Dados {
  name?: string;
  gender?: string;
}

interface Props {
  prefix?: string;
  phone?: string;
  code?: number[];
  name?: string;
  gender?: string;
}

const InfoRegister = () => {
  const navigation = useNavigation();

  const route = useRoute();
  let params: Props | undefined = route.params;

  const [input, setInput] = useState<Dados>({ name: "", gender: "" });
  const [check, setCheck] = useState(false);

  const goNext = () => {
    if (params != undefined) {
      params.name = input?.name;
      params.gender = input?.gender;
    }

    navigation.navigate("InfoComplementaryRegister", params);
  };

  useEffect(() => {
    setCheck((input?.name != "" && input?.gender != "") || false);
  }, [input]);

  const handlerOnChangeInput = (name: string) => {
    setInput({ ...input, name: name });
  };

  const handlerOnchange = (name: string) => {
    setInput({ ...input, gender: name });

    if (Number(name?.length) >= 11) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

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
            <Text style={styles.description}>Dados pessoais</Text>
          </View>

          <View>
            <Text style={styles.title}>
              1/<Text style={{ fontSize: 24, fontWeight: "300" }}>3</Text>
            </Text>
            <Text style={styles.description}>etapas</Text>
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
            id="name"
            onChangeText={handlerOnChangeInput}
          ></TextInput>

          {input?.name != "" && (
            <View
              style={{ height: 50, marginTop: -50, alignItems: "flex-end" }}
            >
              <Icon name="check-circle" size={22} color="#4EBFB4" />
            </View>
          )}

          <View style={{ borderBottomColor: "#092E63", borderBottomWidth: 1 }}>
            <Picker
              selectedValue={input?.gender}
              style={{ color: "#092E63" }}
              onValueChange={handlerOnchange}
            >
              <Picker.Item label="Gênero" value="" />
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Prefiro não dizer" value="não dizer" />
            </Picker>
          </View>
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={goNext} enabled={check}>
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

export default InfoRegister;
