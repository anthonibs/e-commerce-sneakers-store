// https://63e41512c04baebbcda08a27.mockapi.io/api/v1/categories

import { ICategories } from 'shared/interfaces/CategoryInterfaces';
import HttpsServer from './utils/HttpsServer';

class CategoriesService {
  private httpClients: HttpsServer;

  constructor() {
    // As api mockapi is a paid platform and creates fake API with paying endpoints, I decided to use json-server to create api locally to make the individual request.
    this.httpClients = new HttpsServer('https://63e41512c04baebbcda08a27.mockapi.io/api/v1');
  }

  async listCategories(): Promise<ICategories[]>{
    return this.httpClients.get('/categories');
  }
}

export default new CategoriesService();