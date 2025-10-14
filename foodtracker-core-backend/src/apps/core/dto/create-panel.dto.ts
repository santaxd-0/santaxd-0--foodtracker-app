import type { CreateProductDto } from "./create-product.dto"

export interface CreatePanelDto {
    name: string
    callories: number
    productList: Array<CreateProductDto>,
    color: "red" | "green"
}