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

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
    width: '100%',
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
  footer: {
    bottom: 0,
    marginBottom: hp(15),
    position: 'absolute',
    width: '100%',
  },
});
