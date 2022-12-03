import { RouteProp, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import apiProvider from 'src/api/apiProvider';
import { RootStackParamList } from 'src/navigation/rootStack';
import { IArtwork } from 'src/types/artwork';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useDetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [artwork, setArtwork] = useState<IArtwork>();

  const getArtworkDetails = useCallback(async () => {
    const { data, error } = await apiProvider.getArtworkDetail(params.id);
    if (!error) {
      setLoading(false);
      return setArtwork(data.data);
    }
    setLoading(false);
    setHasError(error);
  }, [params.id]);

  useEffect(() => {
    getArtworkDetails();
  }, [getArtworkDetails]);

  return {
    loading,
    hasError,
    artwork,
  };
};

export const useHeartButtonActions = (id: string) => {
  const [isLiked, setIsLiked] = useState(false);

  const readItemFromStorage = useCallback(async () => {
    const item = await AsyncStorage.getItem('@art_favorites');
    if (item !== null) {
      const array: string[] = JSON.parse(item);
      setIsLiked(array.includes(id));
    }
  }, [id]);

  const writeItemToStorage = async () => {
    try {
      const item = await AsyncStorage.getItem('@art_favorites');
      if (item !== null) {
        const array: string[] = JSON.parse(item);
        if (array.includes(id)) {
          const newArray = array.filter(storedId => storedId !== id);
          await AsyncStorage.setItem(
            '@art_favorites',
            JSON.stringify(newArray),
          );
          return setIsLiked(false);
        } else {
          await AsyncStorage.setItem(
            '@art_favorites',
            JSON.stringify([...array, id]),
          );
          return setIsLiked(true);
        }
      } else {
        await AsyncStorage.setItem('@art_favorites', JSON.stringify([id]));
        return setIsLiked(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, [readItemFromStorage]);

  return {
    isLiked,
    handleLike: writeItemToStorage,
  };
};
