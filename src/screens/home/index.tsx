import React from 'react';
import {View, StatusBar, Animated, Easing} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Card from '../../components/card';
import {THEME} from '../../constants/theme';
import Button from '../../components/button';
import {SCREEN} from '../../constants/screen';
import AnimatedTitle from '../../components/animatedTitle';

const Home = () => {
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

  const rotateLeft = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-15deg', '-5deg'],
  });

  const rotateRight = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['15deg', '5deg'],
  });

  const scale = cardAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1],
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME.PRIMARY} />
      <View style={styles.cardsContainer}>
        <Card
          scale={scale}
          cardSymbol={'♠'}
          rotation={rotateLeft}
          style={styles.leftCard}
        />
        <Card
          scale={scale}
          cardSymbol={'♠'}
          rotation={'0deg'}
          style={styles.centerCard}
        />
        <Card
          scale={scale}
          cardSymbol={'♠'}
          rotation={rotateRight}
          style={styles.rightCard}
        />
      </View>
      <AnimatedTitle />
      <View style={styles.footer}>
        <Button
          title={'Play Game'}
          onPress={() => navigation.navigate(SCREEN.GAME)}
        />
      </View>
    </View>
  );
};

export default Home;
