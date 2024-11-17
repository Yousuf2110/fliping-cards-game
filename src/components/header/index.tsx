import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import ResetSvg from '../../assets/svg/resetSvg';
import {SCREEN} from '../../constants/screen';

const Header = ({
  title,
  setModalVisible,
  onPressResetGame,
  hideIcons,
  screenName,
}: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        delayPressIn={0}
        onPress={() => {
          if (screenName === 'TermsConditions' || 'PrivacyPolicy') {
            navigation.navigate(SCREEN.HOME);
          } else {
            navigation.goBack();
          }
        }}
        style={styles.iconContainer}>
        <AntDesign name="arrowleft" color={THEME.WHITE} size={25} />
      </TouchableOpacity>
      <View
        style={[styles.wrapper, {width: hideIcons === true ? '90%' : '62%'}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {!hideIcons && (
        <>
          <TouchableOpacity
            activeOpacity={0.7}
            delayPressIn={0}
            onPress={onPressResetGame}
            style={[styles.iconContainer, {left: 5}]}>
            <ResetSvg width={28} height={28} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            delayPressIn={0}
            onPress={() => setModalVisible(true)}
            style={styles.iconContainer}>
            <AntDesign name="setting" color={THEME.WHITE} size={25} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
