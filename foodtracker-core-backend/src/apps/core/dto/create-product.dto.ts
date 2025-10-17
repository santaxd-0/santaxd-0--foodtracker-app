import { IsNotEmpty, IsUrl, MaxLength} from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @MaxLength(20)
    name: string

    @IsNotEmpty()
    callories: number

    @IsUrl()
    pictureUrl: string

    @MaxLength(50)
    description: string

    @IsNotEmpty()
    @MaxLength(30)
    manufacturersBrand: string
}