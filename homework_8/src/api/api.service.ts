import { Injectable } from '@nestjs/common';
import {ShopService} from "../database/shop/shop.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class ApiService {
  constructor(private readonly shopService: ShopService) {
  }
   async create(createApiDto: Prisma.ProductsCreateInput) {
    return this.shopService.products.create({
      data: createApiDto
    })
  }

  async findAll(customerId: number) {
    return this.shopService.orders.findMany({
      where:{
        customerId,
      },
    });
  }

  async findOne(id: number) {
    return this.shopService.products.findUnique({
      where:{
        id,
      }
    });
  }

  async update(id: number, updateApiDto: Prisma.EmployeesUpdateInput) {
    return this.shopService.employees.update({
      where:{
        id,
      },

      data: updateApiDto
    });
  }

  async remove(id: number) {
    return this.shopService.orders.delete({
      where: {
        id
      }
    });
  }
}
