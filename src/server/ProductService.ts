import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';


class ProductService {
  httpClients: HttpsServer;

  constructor() {
    // As api mocki is a paid platform and creates fake API with paying endpoints, I decided to use json-sever to create api locally to make the individual request.
    this.httpClients = new HttpsServer('http://localhost:5500');
  }

  async listProduct(params: string): Promise<IProduct[]> {
    return this.httpClients.get(`/products/?id=${params}`);
  }
}

export default new ProductService();
