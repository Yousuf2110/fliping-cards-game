import React from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {data} from '../../constants';
import {SCREEN} from '../../constants/screen';
import {useNavigation} from '@react-navigation/native';

const SettingModal = ({visible, onRequestClose}: any) => {
  const navigation: any = useNavigation();

  const handlePress = (id: any) => {
    switch (id) {
      case '1':
        navigation.navigate(SCREEN.HOME);
        break;
      case '2':
        navigation.navigate(SCREEN.PRIVACY_POLICY);
        break;
      case '3':
        navigation.navigate(SCREEN.TERMS_CONDITIONS);
        break;
      case '4':
        onRequestClose();
        break;
      default:
        break;
    }
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={() => handlePress(item.id)}>
      <Text style={styles.buttonTitle}>{item.title}</Text>
      <AntDesign name={item?.icon} color={THEME.WHITE} size={25} />
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Settings</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.bottomSpace} />
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;
