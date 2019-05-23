import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import alex from "./alex";

const WorkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resumeTitle}>{alex.name}</Text>
      <View style={styles.hrLine} />
      <Text style={styles.occupationField}>{alex.occupation}</Text>
      <View style={[styles.workContainer, { flex: 1 }]}>
        <Text style={styles.informationTitle}>Work Experience</Text>
        <ScrollView>
          {alex.workExperience.map(work => (
            <View
              key={work.job + work.company}
              style={styles.tableContainerWork}
            >
              <View style={styles.tableItemLeft}>
                <Text style={styles.fieldName}>{work.job}</Text>
              </View>
              <View style={styles.tableItemRight}>
                <Text style={styles.fieldValue}>
                  {work.start + " - " + work.end}
                </Text>
              </View>
              {work.activities.map(activity => (
                <View key={activity}>
                  <View style={styles.workTableItemColSpan2}>
                    <Text>{"\u2022" + "  " + activity}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tableContainerWork: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  tableItemLeft: {
    width: "55%"
  },
  tableItemRight: {
    width: "45%"
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
  occupationField: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    color: "rgba(0,0,0,4)"
  },
  workContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "column",
    flex: 1,
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 10
  },
  informationTitle: {
    fontSize: 16,
    color: "rgba(50,50,50,4)"
  }
});
