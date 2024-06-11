/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AcceptanceLetterUpdateManyWithoutStudentsInput } from "./AcceptanceLetterUpdateManyWithoutStudentsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { AdmissionLetterUpdateManyWithoutStudentsInput } from "./AdmissionLetterUpdateManyWithoutStudentsInput";
import { PaymentUpdateManyWithoutStudentsInput } from "./PaymentUpdateManyWithoutStudentsInput";
import { EnumStudentPaymentStatus } from "./EnumStudentPaymentStatus";
import { TimetableUpdateManyWithoutStudentsInput } from "./TimetableUpdateManyWithoutStudentsInput";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AcceptanceLetterUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AcceptanceLetterUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AcceptanceLetterUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  acceptanceLetters?: AcceptanceLetterUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: () => AdmissionLetterUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AdmissionLetterUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AdmissionLetterUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  admissionLetters?: AdmissionLetterUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    enum: EnumStudentPaymentStatus,
  })
  @IsEnum(EnumStudentPaymentStatus)
  @IsOptional()
  @Field(() => EnumStudentPaymentStatus, {
    nullable: true,
  })
  paymentStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TimetableUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => TimetableUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => TimetableUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  timetables?: TimetableUpdateManyWithoutStudentsInput;
}

export { StudentUpdateInput as StudentUpdateInput };
