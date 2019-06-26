import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class Orcamentos extends Component {
    static navigationOptions = {
        headerTitle: 'Orçamentos'
    }

    state = {
        orcamentos: [],
    }

    async componentDidMount() {
        const response = await api.get('/proposals');

        this.setState({ orcamentos: response.data });
    }

    render() {
        return (
            <View style={styles.container} >
                <FlatList
                    data={this.state.orcamentos}
                    keyExtractor={orcamento => orcamento.id.toString()}
                    renderItem={({ item }) => (

                        <View style={styles.card}>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Detalhes', { description: item.description })}>
                                <Text style={styles.seller}>Vendedor: {item.seller}</Text>
                                <Text style={styles.customer}>Cliente: {item.customer}</Text>
                                <Text style={styles.value}>Valor: {item.value}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#dbdbdb'   
    }, 
 
    card: {
        marginBottom: 15,   
        padding: 15,
        backgroundColor: '#fff',
        elevation: 1, 
        borderRadius: 5
    },
    seller: { 
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#000' 
    },   
    customer: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    value: {
        fontSize: 15,
        fontWeight: 'bold',
 
    } 
})