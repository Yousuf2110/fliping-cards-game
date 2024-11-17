import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: RFPercentage(20),
    // fontFamily: 'Poppins-SemiBold',
    marginTop: hp(3),
  },
});
