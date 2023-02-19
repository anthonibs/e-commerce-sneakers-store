import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';

class ProductsService {
  private httpClients: HttpsServer;

  constructor() {
    // Fake API hosting to display all products on screen, using mockapi.
    this.httpClients = new HttpsServer('https://63e41512c04baebbcda08a27.mockapi.io/api/v1');
  }

  async listProducts(): Promise<IProduct[]> {
    // Passing as a parameter the URL that the API creates.
    return this.httpClients.get('/products');
  }
}

export default new ProductsService();
