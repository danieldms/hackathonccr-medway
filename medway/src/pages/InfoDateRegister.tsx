import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Platform, Modal } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity, RectButton } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";

const InfoDateRegister = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput("00/00/0000");
  }, []);

  useEffect(() => {
    if (modalVisible == true) {
      setTimeout(() => {
        navigation.navigate("Dashboard");

        setModalVisible(false);
      }, 3000);
    }
  }, [modalVisible]);

  const goNext = () => {
    setModalVisible(true);
  };

  const handlerOnChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === "ios");

    setDate(currentDate);
    setInput(Moment(currentDate).format("DD/MM/YYYY"));
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Icon name="check-circle" size={172} color="#FFF" />
          <Text style={styles.modalTitle}>Sucesso</Text>
          <Text style={styles.modalDescription}>Cadastro concluído!</Text>
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
          <View style={{}}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.description}>Data nascimento</Text>
          </View>
          <View>
            <Text style={styles.title}>
              3/<Text style={{ fontSize: 24, fontWeight: "300" }}>3</Text>
            </Text>
            <Text style={styles.description}>etapas</Text>
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          {Platform.OS === "android" && (
            <TouchableOpacity onPress={showMode}>
              <Text style={styles.input}>{input}</Text>
            </TouchableOpacity>
          )}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              is24Hour={true}
              mode="date"
              display="default"
              dateFormat="dayofweek day month"
              onChange={handlerOnChange}
            />
          )}
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={goNext}>
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

export default InfoDateRegister;
