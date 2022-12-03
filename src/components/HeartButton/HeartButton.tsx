import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withSpring,
} from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { styles } from './HeartButton.styles';

interface HeartButtonProps {
  isLiked: boolean;
  onPress: () => void;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  isLiked,
  onPress,
}) => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
    };
  });

  useEffect(() => {
    liked.value = withSpring(isLiked ? 1 : 0);
  }, [isLiked, liked]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Animated.View style={[styles.unlikedHeart, outlineStyle]}>
        <Icon name="hearto" size={32} color={'#FF2400'} />
      </Animated.View>
      <Animated.View style={fillStyle}>
        <Icon name="heart" size={32} color={'#FF2400'} />
      </Animated.View>
    </Pressable>
  );
};
