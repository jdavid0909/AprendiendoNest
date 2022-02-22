import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ok } from 'assert';
import { title } from 'process';
import { threadId } from 'worker_threads';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';

@ApiTags('Post')
@Controller('post')
export class PostController {
    //class validator sirve para hacer validar es una libreria muy buena.
    //npm i class-validator class-transformer
    //mapped types es mapear las tablas con el dto
    //npm i @nestjs/swagger swagger-ui-express

    constructor(private readonly postService:PostService){

    }
    
    @Get()
    async getMany(){
        const data = await this.postService.getMany();
        return {
            mesagge:"Peticion Correcta",
            data:data
       }
    }

    @Get(':id')
    getOne(@Param('id',ParseIntPipe) id: number){
        console.log(typeof id);
        
        return this.postService.getOne(id);
    }
    @Post()
    createOne(@Body() dto:CreatePostDto ){
        return this.postService.createOne(dto);
    }

    @Put(':id')
    editOne(@Param('id') id:number,
            @Body() dto:EditPostDto){
        return this.postService.EditOne(id,dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id:number){
        return this.postService.deleteOne(id);
    }

}
