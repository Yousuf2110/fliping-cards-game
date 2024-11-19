import React, {useEffect, useRef} from 'react';
import {Animated, Modal, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';
import {THEME} from '../../constants/theme';
import Button from '../button';

const LevelInfo = ({
  levelInfoModal,
  setLevelInfoModal,
  onPress,
  winStatus,
  resetGame,
  resetTimer,
}: any) => {
  const navigation = useNavigation();
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

  const handleTryAgain = () => {
    resetTimer();
    resetGame();
    setLevelInfoModal(false);
  };

  const handleNextLevel = () => {
    setLevelInfoModal(false);
    onPress();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={levelInfoModal}
      onRequestClose={() => setLevelInfoModal(!levelInfoModal)}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Animated.View
            style={[
              styles.iconRow,
              {
                transform: [{scale: scaleAnim}],
              },
            ]}>
            {winStatus ? (
              <>
                <AntDesign name="star" color={THEME.YELLOW} size={100} />
                <AntDesign
                  name="star"
                  color={THEME.YELLOW}
                  size={100}
                  style={{bottom: 50}}
                />
                <AntDesign name="star" color={THEME.YELLOW} size={100} />
              </>
            ) : (
              <Entypo name="emoji-sad" color={THEME.YELLOW} size={100} />
            )}
          </Animated.View>
          <Animated.Text
            style={[
              styles.youWonText,
              {
                transform: [{scale: scaleAnim}],
              },
            ]}>
            {winStatus ? 'You Won!' : 'You Loss!'}
          </Animated.Text>
          <Button
            title={winStatus ? 'Next Level' : 'Try Again'}
            onPress={winStatus ? handleNextLevel : handleTryAgain}
          />
          <Button title="Main Menu" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </Modal>
  );
};

export default LevelInfo;
