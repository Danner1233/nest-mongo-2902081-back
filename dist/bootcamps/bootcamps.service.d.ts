import { Model } from 'mongoose';
import { Bootcamp } from './entities/bootcamp.entity';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
export declare class BootcampsService {
    private BootcampModel;
    constructor(BootcampModel: Model<Bootcamp>);
    create(createBootcampDto: CreateBootcampDto): Promise<import("mongoose").Document<unknown, {}, Bootcamp> & Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Bootcamp> & Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Bootcamp> & Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, updateBootcampDto: UpdateBootcampDto): Promise<string>;
    remove(id: string): Promise<string>;
}
