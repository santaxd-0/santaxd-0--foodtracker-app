import { Module } from "@nestjs/common";
import { CoreController } from "./core.controller";
import { CoreService } from "./core.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Panel, PanelSchema } from "./schemas/panel.schema";
import { Product, ProductSchema } from "./schemas/product.schema";

@Module(
    {
        imports: [
            MongooseModule.forFeature(
                [
                    { name: Panel.name, schema: PanelSchema },
                    { name: Product.name, schema: ProductSchema }
                ]
            )
        ],
        controllers: [CoreController],
        providers: [CoreService]
    }
)
export class CoreModule {}