import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: THEME.WHITE,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '100%',
    backgroundColor: THEME.BACKGROUND,
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  title: {
    fontSize: RFPercentage(3),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Bold',
  },
  footer: {
    width: '100%',
    backgroundColor: THEME.BACKGROUND,
    height: hp(7.3),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  button: {
    height: hp(6),
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.BACKGROUND,
    borderRadius: 10,
    marginTop: hp(1.2),
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(3),
  },
  buttonTitle: {
    fontSize: RFPercentage(2.2),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
  bottomSpace: {
    marginBottom: hp(2),
  },
});
