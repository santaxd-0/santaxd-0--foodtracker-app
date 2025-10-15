import { IsNotEmpty, IsNumber, IsUrl, MaxLength, Min } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @MaxLength(20)
    name: string

    @IsNotEmpty()
    @Min(0)
    callories: number

    @IsUrl()
    pictureUrl: string

    @MaxLength(50)
    description: string

    @IsNotEmpty()
    @MaxLength(30)
    manufacturersBrand: string
}