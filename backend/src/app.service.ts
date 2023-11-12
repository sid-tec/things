import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTeste(): string {
    return 'TESTE OK!';
  }
  getJsonTeste() {
    return {'message' : 'Oi' };
  }
}
