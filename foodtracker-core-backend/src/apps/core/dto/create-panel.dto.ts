import { IsArray, IsInt, IsNotEmpty, IsString, MaxLength, ValidateNested, IsEnum } from "class-validator";
import { CreateProductDto } from "./create-product.dto"
import { Type } from "class-transformer";


export class CreatePanelDto {
    @MaxLength(20)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    callories: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateProductDto)
    @IsNotEmpty()
    productList: Array<CreateProductDto>;

    @IsEnum(['red', 'green'])
    @IsNotEmpty()
    color: "red" | "green";
}