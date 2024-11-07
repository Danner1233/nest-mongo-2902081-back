import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Bootcamp } from './entities/bootcamp.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Injectable()
export class BootcampsService {
  constructor(@InjectModel(Bootcamp.name) private BootcampModel:Model<Bootcamp>){}

  create(createBootcampDto: CreateBootcampDto) {
    const nuevoBootcamp = new this.BootcampModel(createBootcampDto);
    return nuevoBootcamp.save();
 }



  async findAll() {
    return await this.BootcampModel.find().exec();
  }



  findOne(id: string) {
    return this.BootcampModel.find({_id:id}).exec();
  }



  async update(id: string, updateBootcampDto: UpdateBootcampDto) {
    const updatedBootcamp = await this.BootcampModel.findByIdAndUpdate(id, updateBootcampDto, { new: true } ).exec();
    if (!updatedBootcamp) {
      throw new Error('Bootcamp not found');
    }
    return `Bootcamp con la id: ${id} ha sido actualizado correctamente`;
  }



  async remove(id: string) {
    const deletedBootcamp = await this.BootcampModel.findByIdAndDelete(id).exec();
    if (!deletedBootcamp) {
      return ('Bootcamp no existe');
    }
    return `El bootcamp con el id: ${id} ha sido eliminado correctamente`
  }
}
