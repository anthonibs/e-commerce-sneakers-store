import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';

class ProductsService {
  httpClients: HttpsServer;

  constructor() {
    this.httpClients = new HttpsServer('http://localhost:5500');
  }

  async listProducts(): Promise<IProduct[]> {
    return this.httpClients.get('/products');
  }
}

export default new ProductsService();
