import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../constants/theme';
import CircleSvg from '../../assets/svg/circleSvg';
import CrossSvg from '../../assets/svg/crossSvg';

interface PlayerSectionProps {
  currentPlayer: 'X' | 'O';
}

const PlayerSection: React.FC<PlayerSectionProps> = ({currentPlayer}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.column, {borderColor: THEME.YELLOW}]}>
          <CrossSvg width={80} height={80} />
        </View>
        <View style={[styles.column, {borderColor: THEME.BLUE}]}>
          <CircleSvg width={60} height={60} />
        </View>
      </View>
      <View style={{width: '90%'}}>
        <View
          style={[
            styles.indicatorLine,
            {
              borderColor: currentPlayer === 'X' ? THEME.YELLOW : THEME.BLUE,
              alignSelf: currentPlayer === 'X' ? 'flex-start' : 'flex-end',
            },
          ]}
        />
      </View>
    </>
  );
};

export default PlayerSection;
