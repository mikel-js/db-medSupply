import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { Items } from './items.entity';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
