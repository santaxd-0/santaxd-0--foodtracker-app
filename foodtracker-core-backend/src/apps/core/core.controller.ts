import { Controller, Get, Post, Body, HttpCode } from "@nestjs/common";
import { CoreService } from "./core.service";

import { CreatePanelDto } from "./dto/create-panel.dto";
import { Panel } from "./schemas/panel.schema";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./schemas/product.schema";


@Controller("main")
export class CoreController {
    constructor(private readonly coreService: CoreService) {}

    @Get()
    getPanel(): Promise<Panel[]> {
        return this.coreService.getPanel();
    }

    @Post()
    @HttpCode(201)
    createPanel(@Body() createPanelDto: CreatePanelDto) {
        this.coreService.createPanel(createPanelDto);
    }

    @Post("/create-product")
    @HttpCode(201)
    createProduct(@Body() createProductDto: CreateProductDto){
        this.coreService.createProduct(createProductDto);
    }

    @Get("/products")
    getProducts(): Promise<Product[]>{
        return this.coreService.getProducts();
    }
}