/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ResetPasswordRequest as PrismaResetPasswordRequest,
} from "@prisma/client";

export class ResetPasswordRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ResetPasswordRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.resetPasswordRequest.count(args);
  }

  async resetPasswordRequests<
    T extends Prisma.ResetPasswordRequestFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ResetPasswordRequestFindManyArgs>
  ): Promise<PrismaResetPasswordRequest[]> {
    return this.prisma.resetPasswordRequest.findMany<Prisma.ResetPasswordRequestFindManyArgs>(
      args
    );
  }
  async resetPasswordRequest<
    T extends Prisma.ResetPasswordRequestFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ResetPasswordRequestFindUniqueArgs>
  ): Promise<PrismaResetPasswordRequest | null> {
    return this.prisma.resetPasswordRequest.findUnique(args);
  }
  async createResetPasswordRequest<
    T extends Prisma.ResetPasswordRequestCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ResetPasswordRequestCreateArgs>
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.create<T>(args);
  }
  async updateResetPasswordRequest<
    T extends Prisma.ResetPasswordRequestUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ResetPasswordRequestUpdateArgs>
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.update<T>(args);
  }
  async deleteResetPasswordRequest<
    T extends Prisma.ResetPasswordRequestDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ResetPasswordRequestDeleteArgs>
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.delete(args);
  }
}
