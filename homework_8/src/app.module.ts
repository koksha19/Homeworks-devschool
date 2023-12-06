import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ShopModule} from "./database/shop/shop.module";
import { ApiModule } from './api/api.module';


@Module({
  imports: [ShopModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
