import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsMongoId,
} from 'class-validator';

export class CreatePanelDto {
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  callories: number;

  @IsArray()
  @IsMongoId({ each: true })
  @IsNotEmpty()
  productList: Array<string>;

  @IsNotEmpty()
  ownerId: number;
}
