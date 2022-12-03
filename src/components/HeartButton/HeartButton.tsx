import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
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
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name={isLiked ? 'heart' : 'hearto'} size={32} color={'#FF2400'} />
    </Pressable>
  );
};
