export declare class Bootcamp {
    name: string;
    phone: number;
    address: string;
    averageRating: number;
    CreatedAt: Date;
}
export declare const BootcampSchema: import("mongoose").Schema<Bootcamp, import("mongoose").Model<Bootcamp, any, any, any, import("mongoose").Document<unknown, any, Bootcamp> & Bootcamp & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bootcamp, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Bootcamp>> & import("mongoose").FlatRecord<Bootcamp> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
