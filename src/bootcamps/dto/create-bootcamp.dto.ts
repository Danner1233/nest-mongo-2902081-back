import { IsNotEmpty, IsAlpha, IsInt, Min, Max, IsPositive} from "class-validator"

export class CreateBootcampDto {
    
    @IsNotEmpty()
    @IsAlpha()
    readonly name: string

    @IsNotEmpty()
    @IsPositive()
    readonly phone: number 
    readonly address: string

    @IsInt()
    @IsNotEmpty()
    @Max(10)
    @Min(1)
    readonly averageRating: number

    readonly createdAt: Date

}


