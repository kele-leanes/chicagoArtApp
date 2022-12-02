import React from 'react';
import { ActivityIndicator, Image, ScrollView, View, Text } from 'react-native';
import { useDetailScreen, useImageHeight } from './DetailsScreen.hooks';
import { styles } from './DetailsScreen.styles';

export const DetailScreen: React.FC = () => {
  const { loading, artwork } = useDetailScreen();
  const { imageSize, getImageHeight } = useImageHeight();

  const imageUri = `https://www.artic.edu/iiif/2/${artwork?.imageId}/full/1686,/0/default.jpg`;
  return (
    <ScrollView
      contentContainerStyle={[styles.container, loading && styles.center]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            source={{ uri: imageUri }}
            style={[styles.image, imageSize]}
            onLoad={getImageHeight}
            resizeMode={'contain'}
          />
          <View style={styles.card}>
            <Text
              style={[styles.bold, styles.title, styles.item]}
              numberOfLines={2}>
              {artwork?.title}
            </Text>
            <View style={styles.item}>
              <Text style={styles.bold}>Artist:</Text>
              <Text>{artwork?.artistDisplay}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.bold}>Date:</Text>
              <Text>{artwork?.dateDisplay}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.bold}>Info:</Text>
              <Text>{artwork?.mediumDisplay}</Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};
