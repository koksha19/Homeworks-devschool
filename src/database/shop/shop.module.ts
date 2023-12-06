import { Global, Module } from '@nestjs/common';
import { ShopService } from './shop.service';


@Global()
@Module({
  providers: [ShopService],
  exports: [ShopService]
})
export class ShopModule {}
