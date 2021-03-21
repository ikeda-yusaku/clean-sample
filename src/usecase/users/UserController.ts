import {container} from "tsyringe";

import { UserInputData } from "./UserInputData";
import { IUserInputUsecase } from "./IUserInputUsecase";

export class UserController {
    AddNewUser(firstName:string, secondName:string, emailAddress:string) {

        var userInputData = new UserInputData();
        userInputData.firstName = firstName;
        userInputData.secondName = secondName;
        userInputData.emailAddress = emailAddress;
        
        var usecase: IUserInputUsecase = container.resolve('UserUsecaseInteractor');
        usecase.handle(userInputData);

    }
}