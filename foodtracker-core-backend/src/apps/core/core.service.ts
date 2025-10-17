import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Panel } from "./schemas/panel.schema";
import { Product } from "./schemas/product.schema";
import { CreatePanelDto } from "./dto/create-panel.dto";
import { CreateProductDto } from "./dto/create-product.dto";


@Injectable()
export class CoreService {
    constructor(
        @InjectModel(Panel.name) private panelModel: Model<Panel>,
        @InjectModel(Product.name) private productModel: Model<Product>
    ) {}

    getPanel(): Promise<Panel[]> {
        return this.panelModel.find().exec();
    }

    createPanel(createPanelDto: CreatePanelDto) {
        const createdPanel = new this.panelModel(createPanelDto);
        return createdPanel.save();
    }
    
    createProduct(createProductDto: CreateProductDto){
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    getProducts(): Promise<Product[]>{
        return this.productModel.find().exec();
    }
}