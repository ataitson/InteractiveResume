import React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";

import alex from "./alex";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resumeTitle}>{alex.name}</Text>
      <View style={styles.hrLine} />
      <Text style={styles.occupationField}>{alex.occupation}</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.informationTitle}>Contact</Text>

        <View style={styles.tableContainerContact}>
          <View style={styles.tableItem}>
            <Text style={styles.fieldName}>Email:</Text>
          </View>
          <View style={styles.tableItem}>
            <Text style={styles.fieldValue}>{alex.email}</Text>
          </View>

          <View style={styles.tableItem}>
            <Text style={styles.fieldName}>Phone:</Text>
          </View>
          <View style={styles.tableItem}>
            <Text style={styles.fieldValue}>{alex.phone}</Text>
          </View>

          <View style={styles.tableItem}>
            <Text style={styles.fieldName}>Linkedin:</Text>
          </View>

          <View style={styles.tableItem}>
            <Text
              style={[styles.fieldValue, { color: "blue" }]}
              onPress={() =>
                Linking.openURL("https://www.linkedin.com/in/" + alex.linkedin)
              }
            >
              {alex.linkedin}
            </Text>
          </View>

          <View style={styles.tableItem}>
            <Text style={styles.fieldName}>Address:</Text>
          </View>
          <View style={styles.tableItem}>
            <Text style={styles.fieldValue}>{alex.address}</Text>
          </View>
        </View>
        <View style={styles.tableContainerSkills}>
          <View style={styles.tableItem}>
            <Text style={[styles.informationTitle, { marginLeft: -10 }]}>
              Skills
            </Text>
          </View>
          <View style={styles.tableItem}>
            <Text style={[styles.informationTitle, styles.fieldValue]}>
              Experience
            </Text>
          </View>
        </View>
        <View style={[styles.listViewContainer, { flex: 7 }]}>
          {alex.skills.map(skill => (
            <View key={skill.name} style={styles.tableContainer}>
              <View style={styles.tableItem}>
                <Text key={skill.name} style={styles.fieldName}>
                  {skill.name}
                </Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.fieldValue}>
                  {skill.time > 0 ? skill.time + " years" : ""}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
