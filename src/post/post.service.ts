import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository:Repository<PostEntity>
    ){}

    async getMany():Promise<PostEntity[]>{
        return await this.postRepository.find();
    }

    async getOne(id:number){
        const post = await this.postRepository.findOne(id);

        if(!post) throw new NotFoundException();

        return post;
    };

    async EditOne(id:number, dto: EditPostDto){
       const post = await this.postRepository.findOne(id);
       if(!post) throw new NotFoundException();

       const editpost = Object.assign(post,dto);

       return await this.postRepository.save(editpost);
    };

    async createOne(dto:CreatePostDto){
        const post = this.postRepository.create(dto as any)
         return await this.postRepository.save(post);
    }

    async deleteOne(id:number){
        return await this.postRepository.delete(id); 
    };



}
