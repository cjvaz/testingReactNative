/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

import Repo from './components/repo';
import NewRepoModal from './components/newRepoModal';

type Props = {};
export default class App extends Component<Props> {

  state = {
    modalVisible: false,
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title: 'rockerocketseat.com.br',
        author: 'rocketseat',
      },
      {
        id: 2,
        thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title: 'rocketnative.com.br',
        author: 'diego',
      },
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Repositories</Text>
          <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} /> )}
        </ScrollView>

        <NewRepoModal 
          onCancel={() => this.setState({ modalVisible: false })}
          visible={this.state.modalVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  repoList: {
    padding: 20
  },
});
