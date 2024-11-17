import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: -10,
  },
  cardInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    margin: 3,
  },
  cardSymbol: {
    fontSize: 40,
    color: '#000',
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
