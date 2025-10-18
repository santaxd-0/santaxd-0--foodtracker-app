import { Module } from '@nestjs/common';
import { PanelsController, ProductsController } from './core.controller';
import { PanelService, ProductService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Panel, PanelSchema } from './schemas/panel.schema';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Panel.name, schema: PanelSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [PanelsController, ProductsController],
  providers: [PanelService, ProductService],
})
export class CoreModule {}
