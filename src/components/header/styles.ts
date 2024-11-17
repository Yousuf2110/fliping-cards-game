import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(8),
    backgroundColor: THEME.BLACK,
    flexDirection: 'row',
  },
  title: {
    fontSize: RFPercentage(3),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp(0.6),
  },
  iconColumn: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(10),
  },
  iconContainer: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
