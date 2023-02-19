class HttpsServer {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);
    return response.json();
  }
}

export default HttpsServer;