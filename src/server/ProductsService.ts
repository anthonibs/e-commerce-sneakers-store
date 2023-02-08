import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import HttpsServer from './utils/HttpsServer';

class ProductsService {
  httpClients: HttpsServer;

  constructor() {
    // Fake API hosting to display all products on screen, using mocki.
    this.httpClients = new HttpsServer('https://mocki.io/v1/');
  }

  async listProducts(): Promise<IProduct[]> {
    // Passing as a parameter the URL that the API creates.
    return this.httpClients.get('fcd30a27-7805-4948-898c-6b8068e61ab5');
  }
}

export default new ProductsService();
