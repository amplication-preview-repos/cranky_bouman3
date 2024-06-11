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
import { TimetableWhereUniqueInput } from "./TimetableWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimetableUpdateInput } from "./TimetableUpdateInput";

@ArgsType()
class UpdateTimetableArgs {
  @ApiProperty({
    required: true,
    type: () => TimetableWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimetableWhereUniqueInput)
  @Field(() => TimetableWhereUniqueInput, { nullable: false })
  where!: TimetableWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimetableUpdateInput,
  })
  @ValidateNested()
  @Type(() => TimetableUpdateInput)
  @Field(() => TimetableUpdateInput, { nullable: false })
  data!: TimetableUpdateInput;
}

export { UpdateTimetableArgs as UpdateTimetableArgs };
