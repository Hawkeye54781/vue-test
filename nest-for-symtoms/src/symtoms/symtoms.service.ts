import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { CreateSymtomDto } from './dto/create-symtom.dto';
import { UpdateSymtomDto } from './dto/update-symtom.dto';

@Injectable()
export class SymtomsService {
  constructor(private httpService: HttpService) {}

  create(createSymtomDto: CreateSymtomDto) {
    return 'This action adds a new symtom';
  }

  findAll() {
    const url = 'https://www.nhsinform.scot/symptoms-and-self-help/a-to-z/';
    const document = this.httpService.get(url);
    const dom = document.pipe(
      map((result) => {
        return result.data as string;
      }),
    );
    return dom;
  }

  findOne(id: number) {
    return `This action returns a #${id} symtom`;
  }

  update(id: number, updateSymtomDto: UpdateSymtomDto) {
    return `This action updates a #${id} symtom`;
  }

  remove(id: number) {
    return `This action removes a #${id} symtom`;
  }
}
