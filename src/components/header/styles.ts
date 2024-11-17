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
    backgroundColor: THEME.PRIMARY,
    flexDirection: 'row',
  },
  title: {
    fontSize: RFPercentage(3),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Bold',
    marginTop: hp(0.6),
    marginLeft: wp(1),
  },
  iconColumn: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(10),
  },
  iconContainer: {
    width: '15%',
  },
  wrapper: {
    width: '65%',
  },
});
