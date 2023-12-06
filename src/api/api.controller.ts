import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ValidationPipe, UsePipes
} from '@nestjs/common';
import { ApiService } from './api.service';
import {Prisma} from "@prisma/client";
import {CreateApiDto} from "../dto/create.dto";


@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/products')
  create(@Body() createApiDto: Prisma.ProductsCreateInput) {
    return this.apiService.create(createApiDto);
  }

  @Get('/customers/:customerId/orders')
  findAll(@Param('customerId')customerId: string) {
      const order = this.apiService.findAll(+customerId);
      if(!order) throw new HttpException('This customer does not have any orders', HttpStatus.BAD_REQUEST);
      else return order;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(+id);
  }

  @Patch('/employees/:id')
  update(@Param('id') id: string, @Body() updateApiDto: Prisma.EmployeesUpdateInput) {
    return this.apiService.update(+id, updateApiDto);
  }

  @Delete('/orders/:id')
  remove(@Param('id') id: string) {
    const deletedOrder = this.apiService.remove(+id);
    if(deletedOrder) return deletedOrder;
    else throw new HttpException(('Order with this Id does not exist'), HttpStatus.BAD_REQUEST)
  }
}
