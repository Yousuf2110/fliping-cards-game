import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftCard: {
    backgroundColor: '#fff',
    zIndex: 1,
  },
  centerCard: {
    backgroundColor: '#fff',
    zIndex: 2,
    transform: [{scale: 1.1}],
  },
  rightCard: {
    backgroundColor: '#fff',
    zIndex: 1,
  },
});
