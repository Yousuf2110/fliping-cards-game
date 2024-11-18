import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MODAL_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: hp(8),
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: THEME.PRIMARY,
    borderRadius: 20,
    paddingVertical: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: wp(2),
  },
  youWonText: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    color: THEME.YELLOW,
    textAlign: 'center',
    marginVertical: 20,
  },
  footer: {
    bottom: 0,
    marginBottom: hp(10),
    position: 'absolute',
    width: '100%',
  },
});
