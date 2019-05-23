import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./HomeScreen";
import WorkScreen from "./WorkScreen";

import alex from "./alex";

const EducationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resumeTitle}>{alex.name}</Text>
      <View style={styles.hrLine} />
      <Text style={styles.occupationField}>{alex.occupation}</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.informationTitle}>Work Experience</Text>
        <FlatList
          style={styles.listViewContainer}
          data={alex.workExperience}
          keyExtractor={item => `${item.company}-${item.job}`}
          renderItem={({ item }) => (
            <View style={styles.tableContainer}>
              <View style={styles.tableItem}>
                <Text style={styles.fieldName}>{item.job}</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.fieldValue}>
                  {item.start + " - " + item.end}
                </Text>
              </View>
              <View style={styles.workTableItemColSpan2}>
                <Text>{"\u2022" + "  " + item.activities}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Me: HomeScreen,
    Work: WorkScreen,
    Education: EducationScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;

        console.log(navigation.state);
        if (routeName === "Me") {
          iconName = `account-circle`;
        } else if (routeName === "Work") {
          iconName = `chrome-reader-mode`;
        } else if (routeName === "Education") {
          iconName = `school`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.setParams({ alex: alex });
        console.log("onPress:", navigation.setParams({ alex: alex }));
        defaultHandler();
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listViewContainer: {
    flex: 5
  },
  tableContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  tableContainerWork: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  tableContainerContact: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: 80
  },
  tableContainerSkills: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: 5
  },
  tableItem: {
    width: "50%"
  },
  workTableItemColSpan2: {
    width: "100%",
    fontSize: 14,
    textAlign: "left",
    color: "rgba(96,100,109, 1)"
  },
  hrLine: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  resumeTitle: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0,0,0,4)",
    textAlign: "center"
  },
  fieldName: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
    color: "rgba(50,50,50,4)"
  },
  fieldValue: {
    fontSize: 14,
    textAlign: "right",
    color: "rgba(96,100,109, 1)"
  },
  descriptionValue: {
    fontSize: 14,
    textAlign: "left",
    color: "rgba(96,100,109, 1)"
  },
  occupationField: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    color: "rgba(0,0,0,4)"
  },
  contactContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 10
  },
  informationTitle: {
    fontSize: 16,
    color: "rgba(50,50,50,4)"
  }
});

export default createAppContainer(TabNavigator);
