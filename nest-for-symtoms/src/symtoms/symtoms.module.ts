import { Module } from '@nestjs/common';
import { SymtomsService } from './symtoms.service';
import { SymtomsController } from './symtoms.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SymtomsController],
  providers: [SymtomsService],
})
export class SymtomsModule {}
