import { useEffect, useState } from 'react';
import ApiProvider from 'src/api/apiProvider';
import { IArtwork } from 'src/types/artwork';

export const useHomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [artworks, setArtworks] = useState<IArtwork[]>([]);

  const getAllArtworks = async () => {
    const { data, error } = await ApiProvider.getAllArtworks();
    if (!error) {
      setLoading(false);
      setPage(data.pagination.currentPage + 1);
      return setArtworks(data.data);
    }
    setLoading(false);
    setHasError(error);
  };

  const onLoadMore = async () => {
    if (!loading) {
      const { data, error } = await ApiProvider.getAllArtworks(page);
      if (!error) {
        setLoading(false);
        setPage(data.pagination.currentPage + 1);
        return setArtworks(prevState => [...prevState, ...data.data]);
      }
      setLoading(false);
      setHasError(error);
    }
  };

  useEffect(() => {
    getAllArtworks();
  }, []);

  return {
    artworks,
    loading,
    hasError,
    getAllArtworks,
    onLoadMore,
  };
};
