import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IArtwork } from 'src/types/artwork';
import { styles } from './Card.styles';

export const Card: React.FC<{ item: IArtwork }> = ({ item }) => {
  const thumbnailUrl = `https://www.artic.edu/iiif/2/${item.imageId}/full/200,/0/default.jpg`;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: thumbnailUrl,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.title, styles.bold]}>
          {item.title}
        </Text>
        <View style={styles.item}>
          <Text style={styles.bold}>Artist:</Text>
          <Text>{item.artistTitle}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.bold}>Date:</Text>
          <Text>{item.dateDisplay}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
