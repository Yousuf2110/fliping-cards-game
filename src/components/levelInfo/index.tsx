import React from 'react';
import {Modal, Text, View} from 'react-native';
import {styles} from './styles';

const LevelInfo = ({levelInfoModal, setLevelInfoModal, winner}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={levelInfoModal}
      onRequestClose={() => {
        setLevelInfoModal(!levelInfoModal);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>
            {winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default LevelInfo;
