import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import {
  FontAwesome as Icon,
  Feather as IconFeather,
} from "@expo/vector-icons";
import Constants from "expo-constants";
import { useRoute, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RectButton } from "react-native-gesture-handler";

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

  const Tab = createBottomTabNavigator();

  const openWhatsapp = () => {
    let url =
      "whatsapp://send?text=Olá, gostaria de marcar uma consulta&phone=+551149331985";
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  function Dashboard() {
    return (
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
            <IconFeather name="smile" color="#fff" size={40} />
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
            <Text style={styles.text}>Ver histórico</Text>
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
            <Text style={styles.text}>Ver histórico</Text>
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
            <Text style={styles.description}>{`Pressão \narterial`}</Text>
            <Text style={styles.text}>Ver histórico</Text>
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
            <Text style={styles.text}>Ver histórico</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={openWhatsapp}>
            <Icon name="whatsapp" size={32} color="#fff" />
            <Text style={styles.buttonText}>AGENDAR CONSULTA</Text>
          </RectButton>
        </View>
      </View>
    );
  }

  function NotYet() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Not implemented yet!</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Pefil"
        component={NotYet}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Historico"
        component={NotYet}
        options={{
          tabBarLabel: "Histórico",
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Alert"
        component={NotYet}
        options={{
          tabBarLabel: "Alertas",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Constants.statusBarHeight - 15,
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 8,
    backgroundColor: "#F6F5F5",
  },
  alertContainer: {
    backgroundColor: "#1D3273",
    height: 130,
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
    color: "#4EBFB4",
  },
  footer: {
    marginTop: 32,
  },
  button: {
    backgroundColor: "#27AC38",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    marginLeft: 20,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dashboard;
