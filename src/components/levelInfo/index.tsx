import React, {useEffect, useRef} from 'react';
import {Animated, Modal, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';
import {THEME} from '../../constants/theme';
import Button from '../button';
import {SCREEN} from '../../constants/screen';

const LevelInfo = ({levelInfoModal, setLevelInfoModal, winner}: any) => {
  const navigation: any = useNavigation();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();

    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={levelInfoModal}
      onRequestClose={() => {
        setLevelInfoModal(!levelInfoModal);
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Animated.View
            style={[styles.iconRow, {transform: [{scale: scaleAnim}]}]}>
            <AntDesign name="star" color={THEME.YELLOW} size={100} />
            <AntDesign
              name="star"
              color={THEME.YELLOW}
              size={100}
              style={{bottom: 50}}
            />
            <AntDesign name="star" color={THEME.YELLOW} size={100} />
          </Animated.View>
          <Animated.View
            style={[styles.iconRow, {transform: [{scale: scaleAnim}]}]}>
            <Entypo name="emoji-sad" color={THEME.YELLOW} size={150} />
          </Animated.View>

          <Animated.Text style={[styles.youWonText, {opacity: textOpacity}]}>
            You Loss!
          </Animated.Text>

          <Button
            title="Try Again"
            onPress={() => setLevelInfoModal(!levelInfoModal)}
          />
          <Button title="Main Menu" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </Modal>
  );
};

export default LevelInfo;
