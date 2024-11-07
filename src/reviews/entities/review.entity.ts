import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Review {

    @Prop()
    title: string;
    @Prop()
    comment:string;
    @Prop()
    rating:string;

}

export const ReviewSchema = SchemaFactory.createForClass(Review);