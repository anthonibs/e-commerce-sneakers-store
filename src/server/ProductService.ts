import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';


class ProductService {
  private httpClients: HttpsServer;

  constructor() {
    // As api mocki is a paid platform and creates fake API with paying endpoints, I decided to use json-sever to create api locally to make the individual request.
    this.httpClients = new HttpsServer('https://63e41512c04baebbcda08a27.mockapi.io/api/v1');
  }

  async listProduct(params: string): Promise<IProduct[]> {
    return this.httpClients.get(`/products/?id=${params}`);
  }
}

export default new ProductService();
