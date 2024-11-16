import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Image, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const styles = StyleSheet.create({
  images: {
      alignSelf: 'flex-end',
      width: 240,
      height: 336,
  },
    textStyle: {
     fontSize: 15,
     margin: 10,
        fontWeight: 'bold',
   },
    headerText: {
     fontSize: 20,
     marginTop:10,
        padding:10,
     borderWidth:2,
     textAlign: 'center',
     fontWeight: 'bold',
     borderRadius: 15,
  },
   opacityStyle: {
      justifyContent:"space-evenly",
       alignItems:'center',
     borderWidth: 2,
       borderColor: '#dec3c1',
       flex:1,
       flexDirection: 'row',
       backgroundColor: '#9c322c',
       padding: 5,
       borderRadius: 15,
   },
});

const datasource = [
    {
        data: [
            { key: 'Ekans', image: require('./images/Ekans.png') },
            { key: 'Arbok', image: require('./images/Arbok.png') },
            { key: 'Nidoran', image: require('./images/Nidoran.png') },
            { key: 'Nidoking', image: require('./images/Nidoking.png') },
        ],
        title: 'Poison',
        bgColor: 'violet',
    },
    {
        data: [
            { key: 'Clefairy', image: require('./images/Clefairy.png') },
            { key: 'Clefable', image: require('./images/Clefable.png') },
            { key: 'Jigglypuff', image: require('./images/Jigglypuff.png') },
            { key: 'Wigglytuff', image: require('./images/Wigglytuff.png') },
        ],
        title: 'Fairy',
        bgColor: 'pink',
    },
];

const renderItem = ({item}) => {
  return(
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
          <Image source={item.image} style = {styles.images} />
      </TouchableOpacity>
  )
}

const App = () => {
    return (
      <View style={{marginTop: 50, backgroundColor:'black'}}>
          <Button
              title="ADD POKEMON"
              onPress={() => {
                  // Define your onPress functionality here
                  console.log("Add Pokemon button pressed");
              }}
          />
        <StatusBar hidden={true}></StatusBar>
        <SectionList sections={datasource}
                     renderItem={renderItem}
                     renderSectionHeader={({section:{title,bgColor}})=>(
                         <Text style={[styles.headerText,{backgroundColor:bgColor}]}>{title}</Text>
                     )} />
      </View>
  )
}

export default App;
