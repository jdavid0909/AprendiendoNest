import { IsArray, IsBoolean, IsEnum, IsString, Length, Validate } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { postCategory } from "../enums";


export class CreatePostDto{
    
    @IsString()
    title:string;

    @IsString()
    slug:string;

    @IsString()
    excerpt:string;
    
    @IsString()
    content:string;

    @IsEnum(postCategory,{message:`opcion invalidad son ${EnumToString(postCategory)}`})
    category:postCategory;

    @IsArray()
    @IsString({each :true})
    tags:string[];

    @IsBoolean()    
    status:boolean;
}