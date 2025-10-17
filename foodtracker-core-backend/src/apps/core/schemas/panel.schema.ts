import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

import { Product } from "./product.schema";

export type PanelDocument = HydratedDocument<Panel>;

@Schema()
export class Panel {
    @Prop()
    name: string;

    @Prop()
    callories: number;

    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: "Product" }] })
    productList: Product[];

    @Prop({ default: "red" })
    color: "red" | "green";

    @Prop({ type: Date, default: Date.now() })
    createdAt: Date;

    @Prop()
    ownerId: number;
}

export const PanelSchema = SchemaFactory.createForClass(Panel);
