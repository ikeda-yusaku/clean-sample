import { UserOutputData } from "./UserOutputData"

export interface IUserOutputUsecase {
    handle(userOutputData:UserOutputData):void;
}