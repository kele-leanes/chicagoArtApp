import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IArtwork } from 'src/types/artwork';
import { styles } from './Card.styles';

interface ICardProps {
  data: IArtwork;
  onPress: () => void;
}

export const Card: React.FC<ICardProps> = ({ data, onPress }) => {
  const thumbnailUrl = `https://www.artic.edu/iiif/2/${data.imageId}/full/200,/0/default.jpg`;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: thumbnailUrl,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.title, styles.bold]}>
          {data.title}
        </Text>
        <View style={styles.item}>
          <Text style={styles.bold}>Artist:</Text>
          <Text>{data.artistTitle}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.bold}>Date:</Text>
          <Text>{data.dateDisplay}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
