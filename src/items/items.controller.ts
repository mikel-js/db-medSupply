import { Body, Controller, Post } from '@nestjs/common';
import { AddItemDto } from './dtos/add-item.dto';

@Controller('items')
export class ItemsController {
  @Post('/add')
  addItem(@Body() body: AddItemDto) {
    console.log(body);
  }
}
