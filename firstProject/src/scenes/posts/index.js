//import liraries
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Post from './components/Post';

// create a component
class Posts extends Component {

  static navigationOptions = {
    title: 'Posts'
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress = {() => {navigate('Profile') }}
          style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>Meu perfil</Text>
        </TouchableOpacity>
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },

  profileButton: {
    flex: 1,
    backgroundColor: '#069',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },

  profileButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});

//make this component available to the app
export default Posts;
