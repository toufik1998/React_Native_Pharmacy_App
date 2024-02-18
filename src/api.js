import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import CustomButton from './components/CustomButton/CustomButton';

function api({ navigation }) {
  const [pharmacies, setPharmacies] = useState([]);

  const handlePress = (gmapsURL) => {
    Linking.openURL(gmapsURL);
  };

  const onFetchApi = async () => {
    console.log("clicked");

    const options = {
      method: 'GET',
      url: 'https://pharmacies-de-garde-nc.p.rapidapi.com/gardes',
      headers: {
        'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
        'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPharmacies(response.data); // Set pharmacies state with response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {pharmacies.map((d, index) => (
          <View key={index}>
            <Text>{d.nom}</Text>
            <TouchableOpacity onPress={() => handlePress(d.gmaps)}>
              <Text style={styles.linkText}>Click Here to get it in Map</Text>
            </TouchableOpacity>
            <Text style={styles.line}>{d.telephone}</Text>
          </View>
        ))}
        <CustomButton onPress={onFetchApi} text='Submit'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  linkText: {
    color: 'blue',
    marginVertical: 5,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
});

export default api;
