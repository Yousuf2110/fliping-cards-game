import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: hp(10),
  },
  leftCard: {
    backgroundColor: THEME.WHITE,
    zIndex: 1,
  },
  centerCard: {
    backgroundColor: THEME.WHITE,
    zIndex: 2,
    transform: [{scale: 1.1}],
  },
  rightCard: {
    backgroundColor: THEME.WHITE,
    zIndex: 1,
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
