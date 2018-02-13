//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>Post Title</Text>
        <Text style={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ligula ac neque pretium, at viverra justo posuere. Praesent ex risus, fringilla sed ornare vitae, rhoncus quis neque. Fusce luctus sem a dui placerat congue. Nullam mattis lacinia lorem a mollis. Nullam non libero nisl. Nulla in accumsan ligula, ac posuere sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ligula ac neque pretium, at viverra justo posuere. Praesent ex risus, fringilla sed ornare vitae, rhoncus quis neque. Fusce luctus sem a dui placerat congue. Nullam mattis lacinia lorem a mollis. Nullam non libero nisl. Nulla in accumsan ligula, ac posuere sem.</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  },

  postTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  postDescription: {
    marginTop: 10
  }
});

//make this component available to the app
export default Post;
