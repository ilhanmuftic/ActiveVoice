import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Header/>
        <Text style={styles.username}>Hello, username!</Text>
        {/* TODO Dynamically load cards */}
        <ScrollView style={styles.container}>
          <Card
            title="New Issue"
            iconName="report-problem"
            onPress={() => navigation.navigate('Report')}
          />
          <Card
            title="Announcement"
            iconName="campaign"
            onPress={() => navigation.navigate('Announcement')}
          />
          <Card
            title="System Update"
            iconName="system-update"
            onPress={() => navigation.navigate('Update')}
          />
        </ScrollView>
        <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('Report')}>
            <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>
        <Navbar navigation={navigation}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  reportButton: {
    width: '80%',
    margin: 'auto',
    backgroundColor: '#FF3B30',
    padding: 5,
    alignItems: 'center',

  },

  reportButtonText:{
    color: 'white',
    textAlign: 'center'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 30
    }
});
