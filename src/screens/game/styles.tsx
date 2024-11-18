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
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  matchedCard: {
    backgroundColor: '#4caf50', // Green background for matched cards
    borderColor: '#388e3c', // Darker green border
    borderWidth: 2,
    transform: [{scale: 1.1}], // Slight scale for visual effect
    opacity: 0.8, // Slight transparency for matched cards
  },
  card: {
    width: 60,
    height: 80,
    marginVertical: hp(1),
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  cardText: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
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
