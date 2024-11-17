import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  column: {
    width: '23%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 8,
    marginTop: hp(2),
    height: hp(9),
    shadowRadius: 10,
  },
  indicatorLine: {
    width: '23%',
    marginTop: hp(0.7),
    borderTopWidth: 10,
  },
});
