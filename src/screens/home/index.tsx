import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button title="Press" onPress={() => navigation.navigate('Game')} />
    </View>
  );
};

export default Home;
