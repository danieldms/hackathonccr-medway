import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";

interface Props {
  prefix?: string;
  phone?: string;
  code?: number[];
  name?: string;
  gender?: string;
  weight?: string;
  height?: string;
  date?: string;
}

const Dashboard = () => {
  const route = useRoute();
  let params: Props | undefined = route.params;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={styles.alertTitle}>
              <Icon name="bell" size={32} /> Alertas
            </Text>
            <Icon name="smile" color="#fff" size={40} />
          </View>
          <Text style={styles.alertDescription}>
            Verifcamos que está passando por problemas.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
            paddingHorizontal: 0,
          }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>96</Text>
              <Image
                source={require("../assets/health.png")}
                width={22}
                height={22}
              />
            </View>
            <Text style={styles.description}>{`Frequência \n cardíaca`}</Text>
            <Text style={styles.text}>Mínimo: 080</Text>
            <Text style={styles.text}>Média: 091</Text>
            <Text style={styles.text}>Máxima: 091</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>86%</Text>
              <Image
                source={require("../assets/sleep.png")}
                width={22}
                height={22}
              />
            </View>
            <Text style={styles.description}>{`Qualide \n de sono`}</Text>
            <Text style={styles.text}>Mínimo: 080</Text>
            <Text style={styles.text}>Média: 091</Text>
            <Text style={styles.text}>Máxima: 120</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>
                132/<Text style={{ fontSize: 22 }}>84</Text>
              </Text>
              <Image
                source={require("../assets/doctor.png")}
                width={22}
                height={22}
              />
            </View>
            <Text style={styles.description}>{`Pressão arterial`}</Text>
            <Text style={styles.text}>Mínimo: 90/60</Text>
            <Text style={styles.text}>Média: 120/80</Text>
            <Text style={styles.text}>Máxima: 135/82</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>86%</Text>
              <Image
                source={require("../assets/thermometer.png")}
                width={22}
                height={22}
              />
            </View>
            <Text style={styles.description}>{`Medição \n de oxigênio`}</Text>
            <Text style={{ ...styles.text, fontSize: 22, fontWeight: "bold" }}>
              95 %
            </Text>
            <Text style={styles.text}>Média de oxigênio</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Constants.statusBarHeight - 15,
    paddingVertical: Constants.statusBarHeight - 20,
    backgroundColor: "#F6F5F5",
  },
  alertContainer: {
    backgroundColor: "#1D3273",
    height: 160,
    borderRadius: 20,
    flexDirection: "column",
    padding: Constants.statusBarHeight - 10,
    marginBottom: 8,
  },
  alertTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  alertDescription: {
    color: "white",
  },
  contentContainer: {
    paddingHorizontal: 10,
    minWidth: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  contentTitle: {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    color: "#092E63",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    color: "#092E63",
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    color: "#787C89",
  },
});

export default Dashboard;
