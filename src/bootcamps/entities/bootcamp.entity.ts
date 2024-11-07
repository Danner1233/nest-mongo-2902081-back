import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Bootcamp {

    @Prop()
    name: string;
    @Prop()
    phone:number;
    @Prop()
    address:string;
    @Prop()
    averageRating: number;
    @Prop()
    CreatedAt: Date;

}

export const BootcampSchema = SchemaFactory.createForClass(Bootcamp);