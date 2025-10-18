import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { PanelService } from './core.service';
import { ProductService } from './core.service';

import { CreatePanelDto } from './dto/create-panel.dto';
import { Panel } from './schemas/panel.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';

@Controller('panels')
export class PanelsController {
  constructor(private readonly coreService: PanelService) {}

  @Get()
  getPanel(): Promise<Panel[]> {
    return this.coreService.getPanel();
  }

  @Post()
  @HttpCode(201)
  createPanel(@Body() createPanelDto: CreatePanelDto) {
    this.coreService.createPanel(createPanelDto);
  }
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  getProduct(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Post()
  @HttpCode(201)
  createProduct(@Body() createProductDto: CreateProductDto) {
    this.productsService.createProduct(createProductDto);
  }
}
