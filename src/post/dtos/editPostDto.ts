import { PartialType,OmitType } from "@nestjs/mapped-types";
import { CreatePostDto } from "./CreatePostDto";

export class EditPostDto extends PartialType(OmitType(CreatePostDto,['slug'] as const)) {
    //partial Type hace que los campos obligatorios sean opcional

}