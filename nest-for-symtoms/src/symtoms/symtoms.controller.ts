import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SymtomsService } from './symtoms.service';
import { CreateSymtomDto } from './dto/create-symtom.dto';
import { UpdateSymtomDto } from './dto/update-symtom.dto';
import { ApiTags } from '@nestjs/swagger';
import { filter, map } from 'rxjs';
import { parse } from 'node-html-parser';

@Controller('symtoms')
@ApiTags('symtoms')
export class SymtomsController {
  constructor(private readonly symtomsService: SymtomsService) {}

  @Post()
  create(@Body() createSymtomDto: CreateSymtomDto) {
    return this.symtomsService.create(createSymtomDto);
  }

  @Get()
  findAllMatchingSymtoms(@Query() query: { searchText: string }) {
    const returnData = this.symtomsService.findAll();
    const listOfSymtomsHTML = returnData.pipe(
      map((fullDom) => {
        const parsedHTML = parse(fullDom);
        return parsedHTML.querySelectorAll('.nhs-uk__az-link');
      }),
    );

    return listOfSymtomsHTML.pipe(
      map((items) => {
        const matchListOfSymtoms: string[] = [];
        items.forEach((item) => {
          const cleanedText = item.innerText.replace(
            /\r\n\t\t\t\t|\r\n\t\t\t/gi,
            '',
          );
          if (
            cleanedText.toLowerCase().includes(query.searchText.toLowerCase())
          ) {
            matchListOfSymtoms.push(cleanedText);
          }
        });
        return matchListOfSymtoms;
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.symtomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSymtomDto: UpdateSymtomDto) {
    return this.symtomsService.update(+id, updateSymtomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.symtomsService.remove(+id);
  }
}
