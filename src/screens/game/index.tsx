import React, {useState, useEffect, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import {Easing} from 'react-native';
import LevelInfo from '../../components/levelInfo';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Card = {
  id: number;
  number: number;
};

const LEVEL_STORAGE_KEY = '@memory_game_level';

const Game: React.FC = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const intervalRef: any = useRef<NodeJS.Timeout | null>(null);

  const [level, setLevel] = useState<number>(1);
  const [cards, setCards] = useState<Card[]>([]);
  const [winStatus, setWinStatus] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [cardAnimation] = useState<Animated.Value>(new Animated.Value(0));
  const [timer, setTimer] = useState<number>(level <= 7 ? 200 : 100);
  const [levelInfoModal, setLevelInfoModal] = useState<boolean>(false);

  const generateUniqueNumber = (usedNumbers: number[]): number => {
    let num: number;
    do {
      num = Math.floor(Math.random() * 50);
    } while (usedNumbers.includes(num));
    usedNumbers.push(num);
    return num;
  };

  const getColumnsByLevel = (level: number): number => {
    const columns = [2, 2, 3, 3, 3, 4, 4, 4, 4, 4];
    return columns[level - 1] || 100;
  };

  const getCardSize = (level: number) => {
    const columns = getColumnsByLevel(level);
    const cardWidth = screenWidth / columns - 10;
    return {width: cardWidth, height: cardWidth * 1.1};
  };

  useEffect(() => {
    loadSavedLevel();
  }, []);

  useEffect(() => {
    saveLevel(level);
  }, [level]);

  const loadSavedLevel = async () => {
    try {
      const savedLevel = await AsyncStorage.getItem(LEVEL_STORAGE_KEY);
      if (savedLevel !== null) {
        setLevel(parseInt(savedLevel, 10));
      }
    } catch (error) {
      console.error('Error loading saved level:', error);
    }
  };

  const saveLevel = async (currentLevel: number) => {
    try {
      await AsyncStorage.setItem(LEVEL_STORAGE_KEY, currentLevel.toString());
    } catch (error) {
      console.error('Error saving level:', error);
    }
  };

  useEffect(() => {
    initializeCards();
    setTimer(level <= 7 ? 200 : 100);
  }, [level]);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', e => {
        if (!winStatus) {
          e.preventDefault();
          Alert.alert(
            'Are you sure?',
            'Your game progress will be lost if you leave.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Leave',
                onPress: () => navigation.dispatch(e.data.action),
              },
            ],
          );
        }
      });
      return unsubscribe;
    }, [navigation, winStatus]),
  );

  useEffect(() => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          setWinStatus(false);
          setLevelInfoModal(true);
          resetLevel();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [level]);

  const initializeCards = () => {
    const numPairs = level + 1;
    const newCards: Card[] = [];
    const usedNumbers: number[] = [];

    for (let i = 0; i < numPairs; i++) {
      const randomNum = generateUniqueNumber(usedNumbers);
      newCards.push({id: i * 100, number: randomNum});
      newCards.push({id: i * 100 + 1, number: randomNum});
    }

    setCards(newCards.sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const scale = cardAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1],
  });

  const handleCardPress = (card: Card) => {
    if (flippedCards.length === 1 && flippedCards[0].id === card.id) {
      return;
    }

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      if (flippedCards[0].number === card.number) {
        setMatchedCards([...matchedCards, flippedCards[0].id, card.id]);
        setFlippedCards([]);
        checkLevelCompletion();
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };
  const checkLevelCompletion = () => {
    const totalCards = cards.length;
    if (matchedCards.length + 2 === totalCards) {
      setWinStatus(true);
      setTimeout(() => {
        setLevelInfoModal(true);
      }, 1000);
    }
  };

  const handleLevelOutcome = () => {
    if (winStatus) {
      if (level < 10) {
        setLevel(prevLevel => prevLevel + 1);
        setTimer(level + 1 <= 7 ? 200 : 100);
      } else {
        Alert.alert('Congratulations!', 'You have completed all levels.', [
          {text: 'OK', onPress: resetGame},
        ]);
        resetGame();
      }
    } else {
      resetLevel();
    }
    setLevelInfoModal(false);
    setWinStatus(false);
  };

  const resetLevel = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setTimer(level <= 7 ? 200 : 100);
    initializeCards();
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setTimer(level <= 7 ? 200 : 100);
    initializeCards();
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);

    const initialTime = level <= 7 ? 200 : 100;
    setTimer(initialTime);
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          setWinStatus(false);
          setLevelInfoModal(true);
          resetLevel();
          return 0;
        }
      });
    }, 1000);
    intervalRef.current = interval;
  };

  const renderCard = ({item}: {item: Card}) => {
    const {width, height} = getCardSize(level);
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleCardPress(item)}
        style={[
          styles.card,
          {
            width,
            height,
            transform: [{scale}],
          },
          matchedCards.includes(item.id) && styles.matchedCard,
        ]}>
        <Text style={styles.cardText}>
          {flippedCards.some(flippedCard => flippedCard.id === item.id) ||
          matchedCards.includes(item.id)
            ? item.number
            : '?'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        seconds={timer.toString()}
        level={level.toString()}
        resetGame={resetGame}
      />
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={getColumnsByLevel(level)}
        contentContainerStyle={styles.cardsContainer}
        key={level}
        columnWrapperStyle={{
          width: '100%',
          justifyContent: 'center',
        }}
      />
      <LevelInfo
        onPress={handleLevelOutcome}
        levelInfoModal={levelInfoModal}
        setLevelInfoModal={setLevelInfoModal}
        winStatus={winStatus}
        resetGame={resetGame}
        resetTimer={resetTimer}
      />
    </View>
  );
};

export default Game;
