import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { RadioButton } from 'react-native-paper';


export default function App(){
  const [selectedEvent, setSelectedEvent] = useState("Show 1");
  const [checked, setChecked] = useState("Inteira");
  return (
    
    <View style={styles.container}>
      <Text>Selecionar Evento:</Text>
      <View>
      <Picker selectedValue={selectedEvent} style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => setSelectedEvent(itemValue)}>
        <Picker.Item label="Show 1" value="Show1" />
        <Picker.Item label="Show 2" value="Show2" />
      </Picker>
      </View>
      <View></View>
      <Text>Selecionar tipo ingresso:</Text>
      <Text>Inteira:</Text>
      <RadioButton
        value="Inteira"
        status={ checked === 'Inteira' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Inteira')}
      />
      <Text>Meia:</Text>
      <RadioButton
        value="Meia"
        status={ checked === 'Meia' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Meia')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});