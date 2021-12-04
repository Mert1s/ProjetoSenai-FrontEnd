import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import estilo from '../estilo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        color: 'black',
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const App = ({ navigation }) => {
    useEffect(() => {
        axios.get('http://localhost:3000/dados', { responseType: "json" })
            .then(Response => {
                setlista(Response.data)
            })
            .catch(Error => console.log(Error))
        
    }, [])
    const [lista, setlista] = useState([])
    // const ler = async function () {
    //     axios.get('http://localhost:3000/dados', { responseType: "json" })
    //         .then(Response => {
    //             setlista(Response.data)
    //         })
    //         .catch(Error => console.log(Error))
    // }
    return (
        <View style={styles.container}>
            {/* <Button title="Ler" onPress={ler}></Button> */}
            <FlatList
                data={lista}
                renderItem={({ item }) =>
                    <View style={estilo.t}>
                        <Text
                            style={styles.item}>{item.idpessoa} - {item.nome}
                        </Text>
                        <Button title="Alterar"
                            onPress={() => {
                                axios.get('http://localhost:3000/dados', { responseType: "json", params: { id: item.idpessoa } })
                                    .then(Response => {
                                        navigation.navigate('dadospessoais_U', Response.data[0])
                                    })
                                    .catch(Error => console.log(Error))
                            }} />
                        <Button title="Deletar" />
                    </View>}
            />
        </View>
    );
}
export default App;