import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Panel } from './schemas/panel.schema';
import { Product } from './schemas/product.schema';
import { CreatePanelDto } from './dto/create-panel.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { rmqData } from './interfaces/rmqData.interface';

@Injectable()
export class PanelService {
  constructor(@InjectModel(Panel.name) private panelModel: Model<Panel>) {}

  getPanel(): Promise<Panel[]> {
    return this.panelModel.find().populate('productList').exec();
  }

  createPanel(createPanelDto: CreatePanelDto, userId: number) {
    const createPanelProperties = {
      ...createPanelDto,
      ownerId: userId
    }
    const createdPanel = new this.panelModel(createPanelProperties);
    return createdPanel.save();
  }

  handleUserCreated(userData: rmqData){
    const createFirstPannel = {
      name: "My first breakfast",
      callories: 0,
      productList: [],
      ownerId: userData.id
    }

    const createdFirstPanel = new this.panelModel(createFirstPannel);
    return createdFirstPanel.save();
  }
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  createProduct(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
