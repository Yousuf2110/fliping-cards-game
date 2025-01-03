import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {THEME} from '../../constants/theme';

const Header = ({level, seconds, resetGame}: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        delayPressIn={0}
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}>
        <Ionicons name="chevron-back-outline" color={THEME.WHITE} size={25} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Level # {level}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconContainer}
        onPress={resetGame}>
        <Feather
          name="refresh-ccw"
          color={THEME.WHITE}
          size={22}
          style={{right: 10}}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.iconContainer,
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 20,
          },
        ]}>
        <AntDesign
          name="clockcircle"
          color={THEME.WHITE}
          size={20}
          style={{right: 5}}
        />
        <Text style={styles.title}>{seconds}s</Text>
      </View>
    </View>
  );
};

export default Header;
