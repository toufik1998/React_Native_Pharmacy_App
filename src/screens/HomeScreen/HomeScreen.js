import React, { useState,useEffect } from 'react'
import {View,Text,Image,StyleSheet,ScrollView, TouchableOpacity, Linking} from 'react-native'
import Logo from '../../../assets/Doctors-bro.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useForm ,Controller} from 'react-hook-form';
import axios from 'axios';


function home({ navigation }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ()=>{
    
  }
//   const [email,setEmail] = useState('')
 
//   const onForgetPasswordPressed = ()=>{
//     console.warn('forget password')
//   }


const [pharmacies, setPharmacies] = useState([]);


useEffect(() => {
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
   onFetchApi()
},[])

const handlePress = (gmapsURL) => {
  Linking.openURL(gmapsURL);
};
  return (
  <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.root}> 
        <Image source={Logo} style ={styles.logo}  />
        {/* <CustomInput name="email" placeholder="Email" control={control}   rules={{required: 'Email is required',
                 pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
               }}/>
       {errors.email && <Text style={styles.error}>{errors.email.message}</Text>} */}
       <View style ={styles.card_text}>
          <Text style ={styles.title} >Find The pharmacy of guard </Text>
          <Text style ={styles.title} >any time </Text>
          <Text style ={styles.title} >where !</Text>
        </View>
        {pharmacies.map((d, index) => (
          <View key={index}>
            <Text>{d.nom}</Text>
            <TouchableOpacity onPress={() => handlePress(d.gmaps)}>
              <Text style={styles.linkText}>Click Here to get it in Map</Text>
            </TouchableOpacity>
            <Text style={styles.line}>{d.telephone}</Text>
          </View>
        ))}
        {/* <CustomButton onPress={onFetchApi} text='Submit'/> */}
        <CustomButton onPress={() => navigation.push('Signin')}  text="Sign Out "  />
    </View>
 </ScrollView>

  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,


    },
    logo: {
        width: 200,
        height:200,
    },
    error: {
      alignSelf:'stretch',
      color:'#D63484',
    },
    title: {
      textAlign:'center',
      textTransform: 'capitalize',
      fontWeight:'bold',
      fontSize: 25,

    },
    card_text: {
      padding: 10,


    }
})

export default home
   












// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
// import Logo from '../../../assets/Doctors-bro.png';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import axios from 'axios';

// function Home({ navigation }) {
//   const [pharmacies, setPharmacies] = useState([]);

//   useEffect(() => {
//     const fetchPharmacies = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           url: 'https://pharmacies-de-garde-nc.p.rapidapi.com/gardes',
//           headers: {
//             'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
//             'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
//           }
//         };
//         const response = await axios.request(options);
//         setPharmacies(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchPharmacies(); // Call the function to fetch data
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   const handlePress = (gmapsURL) => {
//     Linking.openURL(gmapsURL);
//   };

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.root}>
//         <Image source={Logo} style={styles.logo} />
//         <View style={styles.card_text}>
//           <Text style={styles.title}>Find The pharmacy of guard </Text>
//           <Text style={styles.title}>any time </Text>
//           <Text style={styles.title}>where !</Text>
//         </View>
//         {pharmacies.map((d, index) => (
//           <View key={index}>
//             <Text>{d.nom}</Text>
//             <TouchableOpacity onPress={() => handlePress(d.gmaps)}>
//               <Text style={styles.linkText}>Click Here to get it in Map</Text>
//             </TouchableOpacity>
//             <Text style={styles.line}>{d.telephone}</Text>
//           </View>
//         ))}
//         <CustomButton onPress={() => navigation.push('Signin')} text="Sign Out " />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 200,
//     height: 200,
//   },
//   title: {
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontWeight: 'bold',
//     fontSize: 25,
//   },
//   card_text: {
//     padding: 10,
//   },
// });

// export default Home;
