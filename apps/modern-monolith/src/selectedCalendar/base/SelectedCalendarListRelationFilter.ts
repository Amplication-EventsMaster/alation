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
import { SelectedCalendarWhereInput } from "./SelectedCalendarWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SelectedCalendarListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SelectedCalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarWhereInput)
  @IsOptional()
  @Field(() => SelectedCalendarWhereInput, {
    nullable: true,
  })
  every?: SelectedCalendarWhereInput;

  @ApiProperty({
    required: false,
    type: () => SelectedCalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarWhereInput)
  @IsOptional()
  @Field(() => SelectedCalendarWhereInput, {
    nullable: true,
  })
  some?: SelectedCalendarWhereInput;

  @ApiProperty({
    required: false,
    type: () => SelectedCalendarWhereInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarWhereInput)
  @IsOptional()
  @Field(() => SelectedCalendarWhereInput, {
    nullable: true,
  })
  none?: SelectedCalendarWhereInput;
}
export { SelectedCalendarListRelationFilter as SelectedCalendarListRelationFilter };