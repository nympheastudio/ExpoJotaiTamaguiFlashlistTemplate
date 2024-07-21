// src/views/Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAtom } from 'jotai';
import { homeCountAtom } from '../store/jotaiState';

const Home = ({ navigation }) => {
  const [count, setCount] = useAtom(homeCountAtom);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Go to Example Component" onPress={() => navigation.navigate('Example')} />
     <Button title="Go to Data Screen" onPress={() => navigation.navigate('Data')} />
    </View>
  );
};

export default Home;
