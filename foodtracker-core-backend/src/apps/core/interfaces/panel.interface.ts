import type { Product } from "./product.interface"

export interface Panel {
    name: string
    callories: number
    product_list: Array<Product>
    color: "green" | "red"
}