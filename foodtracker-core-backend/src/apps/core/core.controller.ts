import { Controller, Get, Post, Body, HttpCode, UseGuards, Request } from '@nestjs/common';
import { PanelService } from './core.service';
import { ProductService } from './core.service';

import { CreatePanelDto } from './dto/create-panel.dto';
import { Panel } from './schemas/panel.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import type { rmqData } from './interfaces/rmqData.interface';

@Controller('panels')
export class PanelsController {
  constructor(private readonly coreService: PanelService) {}

  @Get()
  getPanel(): Promise<Panel[]> {
    return this.coreService.getPanel();
  }

  @Post()
  @HttpCode(201)
  @UseGuards()
  createPanel(@Body() createPanelDto: CreatePanelDto, @Request() req) {
    const userId = req.user.id;
    this.coreService.createPanel(createPanelDto, userId);
  }

  @MessagePattern("User created")
  handleUserCreated(@Payload() data: rmqData, @Ctx() context: RmqContext) {
    console.log("User was created" + data.id);
    this.coreService.handleUserCreated(data);
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
