import React from 'react';
import { Text, View, StyleSheet, ListView, Linking } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
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
    ],
  workExperience: [
    { job: "Character Designer", company:"Bioszard Dev", type: "Contract", start: "Feb 2019", end: "Apr 2019", location: "Brasilia, DF/Brazil", 
      activities: [
        "Remotely designed characters for the Brazilian game Bioszard Corporation, to be released on May 3rd, 2019."
      ]},
      { job: ".NET Analyst", company:"BASIS Technology", type: "Permanent, Fulltime", start: "Aug 2016", end: "Aug 2017", location: "Brasilia, DF/Brazil", 
      activities: [
        "Developed and maintained government management softwares based on client requirements using RUP methodologies, C#, VB, Javascript and SQL.",
        "Discussed features and gathered requirements with the client to improve existing softwares."
      ]},
      { job: "Game Developer", company:"TIU Game Studios", type: "Contract", start: "Mar 2015", end: "Jan 2016", location: "Brasilia, DF/Brazil", 
      activities: [
        "Developed the game Colabonacao using Unity3D and published for Android platform, in Brazilian Google Play Store. As the game was funded by the government, it was focused on Brazilian players and market.",
        "https://www.youtube.com/watch?v=QLpIQCDHPmk"
      ]},
      { job: ".NET Analyst", company:"Autotrac", type: "Permanent, Fulltime", start: "Apr 2015", end: "Apr 2016", location: "Brasilia, DF/Brazil", 
      activities: [
        "Re-wrote a legacy system optimizing the threads making it scalable and fixed the bottleneck that prevented the system from getting more customers. Used C#, Javascript and SQL.",
        "Updated the user interface reflecting system new features using geolocation and information received from mobile GPS."
      ]},
      { job: "System Analyst", company:"Indra Company", type: "Permanent, Fulltime", start: "Feb 2014", end: "Mar 2015", location: "Brasilia, DF/Brazil", 
      activities: [
        "Maintained legacy systems and improved it as the client requested using .NET 2.0, VB.NET, Javascript, Java, SQL.",
        "Discussed the client’s needs to gather requirements to improve existing softwares."
      ]},
      { job: ".NET Analyst", company:"Pan American Health Organization", type: "Permanent, Fulltime", start: "Apr 2010", end: "Nov 2013", location: "Brasilia, DF/Brazil", 
      activities: [
        "Database modeling (ERM)",
        "Gathered requirements with clients from different PAHO areas",
        "Documented requirements for homologation",
        "Developed management softwares based on documentation",
        "Developed security system to manage permissions for each used integrated with Active Directory"
      ]},
      { job: "Game Designer/Developer", company:"Behold Studios", type: "Permanent, Fulltime", start: "Jan 2010", end: "Jul 2010", location: "Brasilia, DF/Brazil", 
      activities: [
        "Design and develop spin-off mini-games based on the company's first game: \"The Gravedigger\" using C# on Unity3D.",
        "Performed Game Tests looking for bugs or balancing issues."
      ]}
    ],
  certifications: [
    { name: "Microsoft Certified Professional", year: "2012" },
    { name: "Microsoft Technology Associate - Web Dev Fundamentals (98-363)", year: "2011" }
    ],
  education: { name: "Computer Science BSc", college: "Instituto de Ensino Superior de Brasilia", location: "Brasilia, DF Brazil", start: "Jan 2008", end: "Jan 2010" }

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
        <View style={[styles.contactContainer, {flex: 1}]}>
          <Text style={styles.informationTitle}>
            Contact
          </Text>

          <View style={styles.tableContainerContact}>
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

          
            <ListView
              style={[styles.listViewContainer, {flex: 5}]}
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
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSourceWork: ds.cloneWithRows(alex.workExperience),
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
        <View style={[styles.contactContainer, {flex: 1}]}>
          <Text style={styles.informationTitle}>
            Work Experience
          </Text>



          <ListView
            style={[styles.listViewContainer, {flex: 5}]}
            dataSource={this.state.dataSourceWork}
            renderRow={(data) => 
              <View style={styles.tableContainer}>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldName}>
                    {data.job}
                  </Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldValue}>
                    { data.start + " - " + data.end }
                  </Text>
                </View>
                
                <View style={styles.workTableItemColSpan2}>
                  <Text>{'\u2022' + "  " + data.activities}</Text>
                </View>

              </View>
            }/>
        </View>
      </View>
    );
  }
}

class EducationScreen extends React.Component {
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSourceWork: ds.cloneWithRows(alex.workExperience),
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
        <View style={[styles.contactContainer, {flex: 1}]}>
          <Text style={styles.informationTitle}>
            Work Experience
          </Text>



          <ListView
            style={[styles.listViewContainer, {flex: 5}]}
            dataSource={this.state.dataSourceWork}
            renderRow={(data) => 
              <View style={styles.tableContainer}>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldName}>
                    {data.job}
                  </Text>
                </View>
                <View style={styles.tableItem}>
                  <Text style={styles.fieldValue}>
                    { data.start + " - " + data.end }
                  </Text>
                </View>
                
                <View style={styles.workTableItemColSpan2}>
                  <Text>{'\u2022' + "  " + data.activities}</Text>
                </View>

              </View>
            }/>
        </View>
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
    Education: EducationScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Me') {
          iconName = `account-circle`;
        } else if (routeName === 'Work') {
          iconName = `chrome-reader-mode`;
        } else if (routeName === 'Education') {
          iconName = `school`;
        }

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
  listViewContainer: {
    flex: 5,
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
  tableContainerContact: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: 80
  },
  tableContainerSkills: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: 5
  },
  tableItem: {
    width: '50%', 
  },
  workTableItemColSpan2: {
    width: '100%', 
    fontSize: 14,
    textAlign: 'left',
    color: 'rgba(96,100,109, 1)'
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
  descriptionValue: {
    fontSize: 14,
    textAlign: 'left',
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
    padding: 10,
  },
  informationTitle: {
    fontSize: 16,
    color: 'rgba(50,50,50,4)'
  }
});


export default createAppContainer(TabNavigator);
