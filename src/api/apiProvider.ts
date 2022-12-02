import { keysToCamel } from 'src/utils/keysToCamel';
import { IArtworkResponse } from 'src/types/artwork';

class BaseProvider {
  baseUrl = '';

  constructor({ apiUrl }: { apiUrl: string }) {
    this.baseUrl = apiUrl;
  }
  handleRequest = async <T>({
    route,
    config,
  }: {
    route: string;
    config: RequestInit;
  }) => {
    try {
      const response = await fetch(`${this.baseUrl}${route}`, config);
      const data = (await response.json()) as T;
      return { data, error: false };
    } catch (e) {
      return { data: {} as T, error: true };
    }
  };

  get = async <T>(route: string) =>
    this.handleRequest<T>({ route, config: { method: 'get' } });
}

class ApiProvider extends BaseProvider {
  getAllArtworks = async (page?: number) => {
    const fields =
      '&fields=id,title,artist_display,date_display,artist_title,image_id';
    const { data, error } = await this.get<IArtworkResponse>(
      `/artworks?page=${page}${fields}`,
    );
    return { data: keysToCamel(data), error };
  };
}

export default new ApiProvider({ apiUrl: 'https://api.artic.edu/api/v1' });
