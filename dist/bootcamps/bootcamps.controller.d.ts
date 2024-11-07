import { BootcampsService } from './bootcamps.service';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
export declare class BootcampsController {
    private readonly bootcampsService;
    constructor(bootcampsService: BootcampsService);
    create(createBootcampDto: CreateBootcampDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/bootcamp.entity").Bootcamp> & import("./entities/bootcamp.entity").Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/bootcamp.entity").Bootcamp> & import("./entities/bootcamp.entity").Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/bootcamp.entity").Bootcamp> & import("./entities/bootcamp.entity").Bootcamp & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, updateBootcampDto: UpdateBootcampDto): Promise<string>;
    remove(id: string): Promise<string>;
}
