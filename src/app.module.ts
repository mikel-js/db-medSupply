import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [AdminModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
