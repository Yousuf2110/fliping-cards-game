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
import Button from '../../components/button';
import LevelInfo from '../../components/levelInfo';

type Card = {
  id: number;
  number: number;
};

const Game: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;
  const intervalRef: any = useRef<NodeJS.Timeout | null>(null);

  const [level, setLevel] = useState<number>(8);
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
    const columns = [100, 100, 3, 3, 3, 4, 4, 4, 4, 4];
    return columns[level - 1] || 100;
  };

  const getCardSize = (level: number) => {
    const columns = getColumnsByLevel(level);
    const cardWidth = screenWidth / columns - 10;
    return {width: cardWidth, height: cardWidth * 1.1};
  };

  useEffect(() => {
    initializeCards();
    setTimer(level <= 7 ? 200 : 100);
  }, [level]);

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
    resetTimer();
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
    if (matchedCards.length + 100 === cards.length) {
      setWinStatus(true);
      setLevelInfoModal(true);
    }
  };

  const handleLevelOutcome = () => {
    if (winStatus) {
      if (level < 10) {
        setLevel(prevLevel => prevLevel + 1);
        setTimer(level + 1 <= 7 ? 200 : 100); // Adjust timer based on the level
      } else {
        Alert.alert('Congratulations!', 'You have completed all levels.', [
          {text: 'OK', onPress: resetGame}, // Reset the game when the player finishes all levels
        ]);
        resetGame(); // Reset the game after completing all levels
      }
    } else {
      resetLevel(); // Reset the level if the player hasn't won
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
    setTimer(level <= 7 ? 200 : 100); // Reset the timer value
    initializeCards(); // Initialize the cards for the new game
  };

  // Function to reset the timer
  const resetTimer = () => {
    // Clear any existing interval before starting a new one
    clearInterval(intervalRef.current);

    const initialTime = level <= 7 ? 200 : 100;
    setTimer(initialTime);

    // Start the timer countdown again
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

    // Store the interval ID to clear it when needed
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
