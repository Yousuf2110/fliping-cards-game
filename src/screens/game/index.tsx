import React from 'react';
import {Animated, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Header from '../../components/header';
import {Easing} from 'react-native';
import Card from '../../components/card';
import {SCREEN} from '../../constants/screen';
import Button from '../../components/button';

const Game = () => {
  const navigation: any = useNavigation();
  const [cardAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cardAnimation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(cardAnimation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const scale = cardAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1],
  });

  return (
    <View style={styles.container}>
      <Header seconds={'100'} level={'1'} />
      <View style={styles.cardsContainer}>
        <Card
          scale={scale}
          cardSymbol={'♠'}
          rotation={'0deg'}
          style={styles.centerCard}
        />
        <Card
          scale={scale}
          cardSymbol={'♠'}
          rotation={'0deg'}
          style={styles.centerCard}
        />
      </View>
      <View style={styles.footer}>
        <View style={{width: '50%'}}>
          <Button
            title={'Reset'}
            onPress={() => navigation.navigate(SCREEN.GAME)}
          />
        </View>
        <View style={{width: '50%'}}>
          <Button
            title={'Pause'}
            onPress={() => navigation.navigate(SCREEN.GAME)}
          />
        </View>
      </View>
    </View>
  );
};

export default Game;
