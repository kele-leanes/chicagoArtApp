import React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Card } from 'src/components';
import { RootStackScreenProps } from 'src/navigation/rootStack';
import { IArtwork } from 'src/types/artwork';
import { useHomeScreen } from './HomeScreen.hooks';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({
  navigation,
}) => {
  const { artworks, loading, hasError, getAllArtworks, onLoadMore } =
    useHomeScreen();

  const ListEmptyComponent: React.FC = () => {
    return !loading ? (
      <View style={[styles.flex1, styles.center]}>
        <Text style={styles.bold}>
          {hasError ? 'Something went wrong!' : 'No results'}
        </Text>
        <Text>Pull to refresh</Text>
      </View>
    ) : null;
  };

  const RenderItem: React.FC<{ item: IArtwork }> = ({ item }) => {
    const handlePress = () => navigation.navigate('Details', { ...item });

    return <Card data={item} onPress={handlePress} />;
  };

  return (
    <FlatList
      data={artworks}
      renderItem={RenderItem}
      onEndReached={onLoadMore}
      ListEmptyComponent={ListEmptyComponent}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getAllArtworks} />
      }
    />
  );
};
