import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import { StyleSheet, View, Image, Button, Text,span } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LineChart,
  BarChart,
} from "react-native-chart-kit";

import React from 'react';
import { CheckBox } from 'react-native-elements';
const App = () => {
  const [date, setDate] = useState(new Date());

  const [offeredF, setOfferedF] = useState(false);
  const [notofferedF, setNotOfferedF] = useState(false);

  const [offeredZ, setOfferedZ] = useState(false);
  const [notofferedZ, setNotOfferedZ] = useState(false);

  const [offeredA, setOfferedA] = useState(false);
  const [notofferedA, setNotOfferedA] = useState(false);

  const [offeredM, setOfferedM] = useState(false);
  const [notofferedM, setNotOfferedM] = useState(false);

  const [offeredI, setOfferedI] = useState(false);
  const [notofferedI, setNotOfferedI] = useState(false);

  const [storageF, setstorageF] = useState('');
  const [storageZ, setstorageZ] = useState('');
  const [storageA, setstorageA] = useState('');
  const [storageM, setstorageM] = useState('');
  const [storageI, setstorageI] = useState('');
  const [storagedate, setstoragedate] = useState('');


  const profile = async () => {
    await AsyncStorage.setItem('fajar', offeredF);
    setOfferedF('');
    await getofferedF();
    await AsyncStorage.setItem('zuhar', offeredZ);
    setOfferedZ('');
    await getofferedZ();
    await AsyncStorage.setItem('asar', offeredA);
    setOfferedA('');
    await getofferedA();
    await AsyncStorage.setItem('maghrib', offeredM);
    setOfferedM('');
    await getofferedM();
    await AsyncStorage.setItem('Isha', offeredI);
    setOfferedI('');
    await getofferedI();
    await AsyncStorage.setItem('ff', date);
    setDate('');
    await getDate();
  };

  const getDate = async () => {
    const data = await AsyncStorage.getItem('ff');
    setstoragedate(data);
  }
  const getofferedF = async () => {
    const data = await AsyncStorage.getItem('fajar');
    setstorageF(data);
  }
  const getofferedZ = async () => {
    const data = await AsyncStorage.getItem('zuhar');
    setstorageZ(data);
  }
  const getofferedA = async () => {
    const data = await AsyncStorage.getItem('asar');
    setstorageA(data);
  }
  const getofferedM = async () => {
    const data = await AsyncStorage.getItem('maghrib');
    setstorageM(data);
  }
  const getofferedI = async () => {
    const data = await AsyncStorage.getItem('Isha');
    setstorageI(data);
  }

  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  const FajarOffer = () => {
    setOfferedF(true);
    setNotOfferedF(false);
  }
  const FajarNotOffer = () => {
    setOfferedF(false);
    setNotOfferedF(true);
  }
  const ZuhrOffer = () => {
    setOfferedZ(true);
    setNotOfferedZ(false);
  }
  const ZuhrNotOffer = () => {
    setOfferedZ(false);
    setNotOfferedZ(true);
  }
  const AsarOffer = () => {
    setOfferedA(true);
    setNotOfferedA(false);
  }
  const AsarNotOffer = () => {
    setOfferedA(false);
    setNotOfferedA(true);
  }
  const MaghribOffer = () => {
    setOfferedM(true);
    setNotOfferedM(false);
  }
  const MaghribNotOffer = () => {
    setOfferedM(false);
    setNotOfferedM(true);
  }
  const IshaOffer = () => {
    setOfferedI(true);
    setNotOfferedI(false);
  }
  const IshaNotOffer = () => {
    setOfferedI(false);
    setNotOfferedI(true);
  }

  const record = () => {
    let arr = [];
    console.log(`New date selected`);
    arr.push(newDate);
  }

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View>

      <h1 style={{ backgroundColor: '#8fbc8f', textAlign: 'center' }}>Salah_Tracker</h1>
      <View >
        <DatePicker style={{ marginLeft: 40 }}
          onChange={onChange}
          minDate={new Date(true)} maxDate={new Date()}

        />

      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/fajar.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredF}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={FajarOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedF}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={FajarNotOffer}
        />


      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/Zuhr.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredZ}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={ZuhrOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedZ}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={ZuhrNotOffer}
        />




      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/asr.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredA}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={AsarOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedA}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={AsarNotOffer}
        />

      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/maghrib.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredM}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={MaghribOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedM}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={MaghribNotOffer}
        />




      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>

        <Image source={require('./assets/isha.png')}
          style={{ width: 40, height: 40 }}
        />
        <CheckBox
          title="Offered"
          checked={offeredI}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={IshaOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedI}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={IshaNotOffer}
        />

      </View>
      <Button title='Check Record' color="#841584" onPress={() => profile()} />
     
     <h1>Record</h1>
      <Text  style={{padding: 10}}>Selected Date: {storagedate}</Text>
      <Text numberOfLines={1} > <b style={{padding: 20, fontSize: 18,  borderRadius: 50,margin:10}}>Fajar Offered: </b>  {storageF}</Text>
      <Text numberOfLines={1} > <b style={{padding: 10, fontSize: 18, borderRadius: 50, marginLeft:10}}> Zuhar Offered: </b>{storageZ}</Text>
      <Text numberOfLines={1} ><b style={{padding: 10, fontSize: 18, borderRadius: 50, marginLeft:10}}>Asar Offered: </b> {storageA}</Text>
      <Text numberOfLines={1} > <b  style={{padding: 10, fontSize: 18, borderRadius: 50, marginLeft:10}}>Maghrib Offered: </b> {storageM}</Text>
      <Text numberOfLines={1} > <b style={{ padding: 10, fontSize: 18, borderRadius: 50, marginLeft:10}}> Isah Offered: </b>{storageI}</Text>

<h1>.....</h1>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    backgroundColor: '#e9967a',
    alignContent: 'center',
    

  },
  
});