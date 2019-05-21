import React from 'react';
import { Text, View, StyleSheet, ListView, Linking } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconWithBadge from './IconWithBadge';

const alex = {
  name: "Alexandre Taitson Moreira",
  occupation: "Developer",
  address: "128 Fairview Mall Drive",
  email: "moreira.alx@gmail.com",
  phone: "(647) 833 5050)",
  linkedin: "moreiraalx",
  skills: [
      { name: "Fluent English and Portuguese", time: "0" },
      { name: "Unity", time: "8" }, 
      { name: "Game Dev", time: "8" },
      { name: "C#", time: "8" },
      { name: ".NET", time: "8" }, 
      { name: "SQL", time: "8" },
      { name: "Javascript", time: "8" },
      { name: "Entity Framework", time: "6" }, 
      { name: "JSON", time: "5" },
      { name: "Git", time: "4" },
      { name: "SCRUM", time: "3" }
    ]
  }

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(alex.skills),
    }; 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resumeTitle}>
              {alex.name}
        </Text>
        <View style={styles.hrLine} />
        <Text style={styles.occupationField}>
              {alex.occupation}
        </Text>
        <View style={styles.contactContainer}>
          <Text style={styles.informationTitle}>
            Contact
          </Text>

          <View style={styles.tableContainer}>
            <View style={styles.tableItem}>
              <Text style={styles.fieldName}>
                Email: 
              </Text>
            </View>
            <View style={styles.tableItem}>
              <Text style={styles.fieldValue}>
                {alex.email}
              </Text>
            </View>
            
            <View style={styles.tableItem}>
              <Text style={styles.fieldName}>
                Phone: 
              </Text>
            </View>
            <View style={styles.tableItem}>
              <Text style={styles.fieldValue}>
                {alex.phone}
              </Text>
            </View>

            <View style={styles.tableItem}>
              <Text style={styles.fieldName}>
                Linkedin: 
              </Text>
            </View>

            <View style={styles.tableItem}>
              <Text style={[styles.fieldValue, {color: 'blue'}]}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/' + alex.linkedin)}>
                { alex.linkedin }
              </Text>
            </View>
            
            <View style={styles.tableItem}>
              <Text style={styles.fieldName}>
                Address: 
              </Text>
            </View>
            <View style={styles.tableItem}>
              <Text style={styles.fieldValue}>
                {alex.address}
              </Text>
            </View>

            
          </View>

          <Text style={styles.informationTitle}>
            Skills
          </Text>

          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => 
              <View style={styles.tableContainer}>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldName}>
                    {data.name}
                  </Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldValue}>
                    { data.time > 0 ? data.time + " years" : "" }
                  </Text>
                </View>
              </View>
            }/>


        </View>
      </View>
    );
  }
}

class WorkScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Work and Education!</Text>
      </View>
    );
  }
}

const HomeIconWithBadge = (props) => {
  return <IconWithBadge {...props} badgeCount={3} />;  
}

const TabNavigator = createBottomTabNavigator(
  {
    Me: HomeScreen,
    Work: WorkScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Me') {
          iconName = `person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Work') {
          iconName = `chrome-reader-mode`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  tableItem: {
    width: '50%', 
  },
  hrLine: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  resumeTitle: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 20,
    color: 'rgba(0,0,0,4)',
    textAlign: 'center',
  },
  fieldName: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: 'left',
    color: 'rgba(50,50,50,4)'
  },
  fieldValue: {
    fontSize: 14,
    textAlign: 'right',
    color: 'rgba(96,100,109, 1)',
  },
  occupationField: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: 'rgba(0,0,0,4)'
  },
  contactContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 5
  },
  informationTitle: {
    fontSize: 16,
    color: 'rgba(50,50,50,4)'
  }
});


export default createAppContainer(TabNavigator);
