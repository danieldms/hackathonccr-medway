import React, { useState, useEffect, FormEvent } from "react";
import { View, StyleSheet, Text, Picker } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity, RectButton, TextInput } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

interface Phone {
  prefix?: string;
  phone?: string;
}

const PhoneRegister = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState<Phone>({ prefix: "55" });
  const [check, setCheck] = useState(false);

  const handlerPrefixChange = (name: string) => {
    setPhone({ ...phone, prefix: name });
  };

  const handlerNameChange = (name: string) => {
    setPhone({ ...phone, phone: name });
    if (Number(name?.length) >= 11) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const goNext = () => {
    navigation.navigate("Auth", phone);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="x-circle" size={24} color="#092E63" />
        </TouchableOpacity>

        <View style={styles.contentTitle}>
          <Text style={styles.title}>Registre-se</Text>
          <Text style={styles.description}>
            Informe o código do país e digite o número do seu telefone.{" "}
          </Text>
        </View>

        <View style={styles.phoneContainer}>
          <View
            style={{
              borderBottomColor: "#092E63",
              borderBottomWidth: 1,
              marginRight: 10,
            }}
          >
            <Picker
              selectedValue={phone.prefix}
              style={{ width: 100, color: "#092E63" }}
              onValueChange={handlerPrefixChange}
            >
              <Picker.Item label="+55" value="+55" />
            </Picker>
          </View>
          <TextInput
            placeholder="Seu número"
            value={phone.phone}
            maxLength={11}
            onChangeText={handlerNameChange}
            style={styles.input}
            keyboardType="number-pad"
          ></TextInput>
        </View>

        {check && (
          <View style={{ height: 40, marginTop: -40, alignItems: "flex-end" }}>
            <Icon name="check-circle" size={22} color="#4EBFB4" />
          </View>
        )}
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={goNext} enabled={check}>
            <Text style={styles.buttonText}>Confirmar</Text>
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
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    color: "#092E63",
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
  },
  description: {
    paddingHorizontal: 24,
    textAlign: "center",
  },
  phoneContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "stretch",
  },
  input: {
    flex: 1,
    color: "#092E63",
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

export default PhoneRegister;
