/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AcceptanceLetterWhereUniqueInput } from "./AcceptanceLetterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AcceptanceLetterUpdateInput } from "./AcceptanceLetterUpdateInput";

@ArgsType()
class UpdateAcceptanceLetterArgs {
  @ApiProperty({
    required: true,
    type: () => AcceptanceLetterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcceptanceLetterWhereUniqueInput)
  @Field(() => AcceptanceLetterWhereUniqueInput, { nullable: false })
  where!: AcceptanceLetterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AcceptanceLetterUpdateInput,
  })
  @ValidateNested()
  @Type(() => AcceptanceLetterUpdateInput)
  @Field(() => AcceptanceLetterUpdateInput, { nullable: false })
  data!: AcceptanceLetterUpdateInput;
}

export { UpdateAcceptanceLetterArgs as UpdateAcceptanceLetterArgs };
