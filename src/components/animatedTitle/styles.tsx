import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    padding: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  letter: {
    fontSize: RFValue(30),
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
    marginHorizontal: 2,
  },
  C: {
    color: '#FF4B4B',
    fontSize: RFValue(35),
  },
  A: {
    color: '#FFD700',
  },
  R: {
    color: '#4CAF50',
  },
  D: {
    color: '#2196F3',
  },
  S: {
    color: '#9C27B0',
    fontSize: 52,
  },
  P: {
    color: '#FF9800',
    fontSize: 55,
  },
  A2: {
    color: '#E91E63',
  },
  R2: {
    color: '#00BCD4',
  },
  T: {
    color: '#8BC34A',
  },
  Y: {
    color: '#FF5722',
  },
  exclamation: {
    color: '#FFC107',
    fontSize: 55,
    marginLeft: 5,
  },
});
