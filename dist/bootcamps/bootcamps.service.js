"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootcampsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bootcamp_entity_1 = require("./entities/bootcamp.entity");
const mongoose_2 = require("@nestjs/mongoose");
let BootcampsService = class BootcampsService {
    constructor(BootcampModel) {
        this.BootcampModel = BootcampModel;
    }
    create(createBootcampDto) {
        const nuevoBootcamp = new this.BootcampModel(createBootcampDto);
        return nuevoBootcamp.save();
    }
    async findAll() {
        return await this.BootcampModel.find().exec();
    }
    findOne(id) {
        return this.BootcampModel.find({ _id: id }).exec();
    }
    async update(id, updateBootcampDto) {
        const updatedBootcamp = await this.BootcampModel.findByIdAndUpdate(id, updateBootcampDto, { new: true }).exec();
        if (!updatedBootcamp) {
            throw new Error('Bootcamp not found');
        }
        return `Bootcamp con la id: ${id} ha sido actualizado correctamente`;
    }
    async remove(id) {
        const deletedBootcamp = await this.BootcampModel.findByIdAndDelete(id).exec();
        if (!deletedBootcamp) {
            return ('Bootcamp no existe');
        }
        return `El bootcamp con el id: ${id} ha sido eliminado correctamente`;
    }
};
exports.BootcampsService = BootcampsService;
exports.BootcampsService = BootcampsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(bootcamp_entity_1.Bootcamp.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BootcampsService);
//# sourceMappingURL=bootcamps.service.js.map