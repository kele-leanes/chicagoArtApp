import { RouteProp, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { ImageLoadEventData, NativeSyntheticEvent } from 'react-native';
import apiProvider from 'src/api/apiProvider';
import { RootStackParamList } from 'src/navigation/rootStack';
import { IArtwork } from 'src/types/artwork';

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

export const useImageHeight = () => {
  const [imageSize, setImageSize] = useState({});

  const getImageHeight = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const {
      nativeEvent: {
        source: { height },
      },
    } = event;
    setImageSize({ height });
  };

  return {
    imageSize,
    getImageHeight,
  };
};
