import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {THEME} from '../../constants/theme';
import {SCREEN} from '../../constants/screen';
import AnimatedTitle from '../../components/animatedTitle';

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(SCREEN.HOME);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME.PRIMARY} />
      <AnimatedTitle />
    </View>
  );
};

export default Splash;
