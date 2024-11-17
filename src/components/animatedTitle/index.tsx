import React, {useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import {styles} from './styles';

const AnimatedTitle = () => {
  const letterAnimations = Array(11)
    .fill(0)
    .map(() => new Animated.Value(0));

  useEffect(() => {
    const animations = letterAnimations.map((anim, index) => {
      return Animated.sequence([
        Animated.delay(index * 100),
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim, {
              toValue: 1,
              duration: 1500,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(anim, {
              toValue: 0,
              duration: 1500,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
          ]),
        ),
      ]);
    });

    Animated.parallel(animations).start();
  }, []);

  const getAnimatedStyle = (index: any) => {
    return {
      transform: [
        {
          translateY: letterAnimations[index].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, -10, 0],
          }),
        },
      ],
    };
  };

  return (
    <View style={styles.titleContainer}>
      <View style={styles.wordContainer}>
        <Animated.Text style={[styles.letter, styles.C, getAnimatedStyle(0)]}>
          C
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.A, getAnimatedStyle(1)]}>
          a
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.R, getAnimatedStyle(2)]}>
          r
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.D, getAnimatedStyle(3)]}>
          d
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.S, getAnimatedStyle(4)]}>
          s
        </Animated.Text>
      </View>

      <View style={styles.wordContainer}>
        <Animated.Text style={[styles.letter, styles.P, getAnimatedStyle(5)]}>
          P
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.A2, getAnimatedStyle(6)]}>
          a
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.R2, getAnimatedStyle(7)]}>
          r
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.T, getAnimatedStyle(8)]}>
          t
        </Animated.Text>
        <Animated.Text style={[styles.letter, styles.Y, getAnimatedStyle(9)]}>
          y
        </Animated.Text>
        <Animated.Text
          style={[styles.letter, styles.exclamation, getAnimatedStyle(10)]}>
          !
        </Animated.Text>
      </View>
    </View>
  );
};

export default AnimatedTitle;
