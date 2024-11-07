import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop()
    name: string;
    @Prop()
    email:string;
    @Prop()
    rol:string;
    @Prop()
    pasword: number;

}

export const UserSchema = SchemaFactory.createForClass(User);