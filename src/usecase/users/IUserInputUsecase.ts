import { UserInputData } from "./UserInputData";
export interface IUserInputUsecase {
    handle(userInputData: UserInputData):void;
}