import {View, Text, Animated} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Card = ({style, rotation, scale, cardSymbol}: any) => {
  return (
    <Animated.View
      style={[styles.card, style, {transform: [{rotate: rotation}, {scale}]}]}>
      <View style={styles.cardInner}>
        <Text style={styles.cardSymbol}>{cardSymbol}</Text>
      </View>
    </Animated.View>
  );
};

export default Card;
