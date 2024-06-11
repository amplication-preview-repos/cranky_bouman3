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
import { AcceptanceLetterCreateNestedManyWithoutStudentsInput } from "./AcceptanceLetterCreateNestedManyWithoutStudentsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { AdmissionLetterCreateNestedManyWithoutStudentsInput } from "./AdmissionLetterCreateNestedManyWithoutStudentsInput";
import { PaymentCreateNestedManyWithoutStudentsInput } from "./PaymentCreateNestedManyWithoutStudentsInput";
import { EnumStudentPaymentStatus } from "./EnumStudentPaymentStatus";
import { TimetableCreateNestedManyWithoutStudentsInput } from "./TimetableCreateNestedManyWithoutStudentsInput";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AcceptanceLetterCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AcceptanceLetterCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AcceptanceLetterCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  acceptanceLetters?: AcceptanceLetterCreateNestedManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: () => AdmissionLetterCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AdmissionLetterCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AdmissionLetterCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  admissionLetters?: AdmissionLetterCreateNestedManyWithoutStudentsInput;

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
    type: () => PaymentCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutStudentsInput;

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
    type: () => TimetableCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => TimetableCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => TimetableCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  timetables?: TimetableCreateNestedManyWithoutStudentsInput;
}

export { StudentCreateInput as StudentCreateInput };
