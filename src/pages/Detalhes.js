import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Detalhes extends Component {
  static navigationOptions = {
    headerTitle: 'Detalhes'
  }


  render() {
    const description = this.props.navigation.getParam('description');

    return (

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#dbdbdb'
  },
 
  card: { 
    padding: 15, 
    backgroundColor: '#fff',
    elevation: 1, 
    borderRadius: 5
  },
  description: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#000'
  }
})
