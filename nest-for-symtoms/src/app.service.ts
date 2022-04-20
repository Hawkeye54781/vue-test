import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable, of } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Console } from 'console';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
