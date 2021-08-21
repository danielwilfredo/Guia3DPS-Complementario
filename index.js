import {AppRegistry} from 'react-native';
import React from 'react';
import {View, ScrollView, StyleSheet, Image, FlatList} from 'react-native';
import {Text, Card, Button, Icon} from 'react-native-elements';

const foodData = [
  {
    id: '1',
    title: 'Pupusas',
    desc: `Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.`,
    src: require('./src/img/pupusas-comida.jpg'),
  },
  {
    id: '2',
    title: 'Atol de Elote',
    desc: `Los atoles son una de las comidas típicas de El Salvador y los hay de diversos tipos. Son espesos y se toman calientes. Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco, uno elaborado a partir de maíz fermentado, agua y alhuashte, polvo obtenido al moler las semillas de ayote.`,
    src: require('./src/img/atol-bebida.jpg'),
  },
  {
    id: '3',
    title: 'Sopa de pata',
    desc: `Sopa cuyo ingrediente base son las extremidades de la vaca, a las que se les agregan verduras como plátano, repollo, yuca, pipianes, ejotes y güisquil, Al servirla se le añaden chiles jalapeños en pequeños trozos, cebolla y cilantro.  Unas gotas de limón les darán un sabor más exótico.`,
    src: require('./src/img/sopa-de-pata.jpg'),
  },
  {
    id: '4',
    title: 'Tamales de Elote',
    desc: `Este tipo de tamal se elabora con los granos de maíz cuando la mazorca aún está tierna. Se le echa a la masa crema de leche, leche, manteca y en ocasiones, azúcar en vez de sal.`,
    src: require('./src/img/tamales-comida.jpg'),
  },
  {
    id: '5',
    title: 'Wilfredo Granados',
    desc: `Ejercicio Complementario guia 3 DPS, Aplicación de platos tipicos salvadoreños realizada en React-Native utilizando el componente card de React-Native-Elements
    ${"\n"} Carnet: GH161659`,
    src: require('./src/img/pp.jpg'),
  },
];

const Item = ({title, img, desc}) => (
  <ScrollView style={{
    backgroundColor:'#1046b0',
    opacity:0.9
  }}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title style={{fontSize:20, color:'#1046b0', opacity:0.8}}>{title}</Card.Title>
        <Card.Divider />
        <Card.Image 
        style={styles.image}
        source={img}
        />
        <Text style={styles.textTitle}>Descripción: {''} 
        <Text style={styles.textDesc}>{desc}</Text></Text>
        
      </Card>
    </View>
  </ScrollView>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} img={item.src} desc={item.desc} />
  );

  return <>
  
          <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
  </>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:250,
    height:150,
    borderWidth:2,
    borderColor:'#7e7e7e',
    resizeMode:'contain',
    margin:'auto',
    opacity:0.9,
    marginLeft:50
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  }, 
  card: {
    alignItems:'center'
  },
  textDesc:{
    textAlign:'justify'
  },
  textTitle:{
    fontWeight:'bold',
    marginTop:5
  }
});

AppRegistry.registerComponent('comidasalvador', () => App);
