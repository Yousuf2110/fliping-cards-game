import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import VsSvg from '../../assets/svg/vsSvg';
import ManSvg from '../../assets/svg/manSvg';
import CompSvg from '../../assets/svg/aiSvg';

const Button = ({onPress, title}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.button}>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
