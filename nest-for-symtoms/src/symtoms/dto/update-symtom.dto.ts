import { PartialType } from '@nestjs/mapped-types';
import { CreateSymtomDto } from './create-symtom.dto';

export class UpdateSymtomDto extends PartialType(CreateSymtomDto) {}
