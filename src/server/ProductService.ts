import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';


class ProductService {
  httpClients: HttpsServer;

  constructor() {
    this.httpClients = new HttpsServer('http://localhost:5500');
  }

  async listProduct(params: string): Promise<IProduct[]> {
    return this.httpClients.get(`/products/?id=${params}`);
  }
}

export default new ProductService();
