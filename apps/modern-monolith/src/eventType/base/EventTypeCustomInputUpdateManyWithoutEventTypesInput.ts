/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EventTypeCustomInputWhereUniqueInput } from "../../eventTypeCustomInput/base/EventTypeCustomInputWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EventTypeCustomInputUpdateManyWithoutEventTypesInput {
  @Field(() => [EventTypeCustomInputWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeCustomInputWhereUniqueInput],
  })
  connect?: Array<EventTypeCustomInputWhereUniqueInput>;

  @Field(() => [EventTypeCustomInputWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeCustomInputWhereUniqueInput],
  })
  disconnect?: Array<EventTypeCustomInputWhereUniqueInput>;

  @Field(() => [EventTypeCustomInputWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventTypeCustomInputWhereUniqueInput],
  })
  set?: Array<EventTypeCustomInputWhereUniqueInput>;
}

export { EventTypeCustomInputUpdateManyWithoutEventTypesInput as EventTypeCustomInputUpdateManyWithoutEventTypesInput };
