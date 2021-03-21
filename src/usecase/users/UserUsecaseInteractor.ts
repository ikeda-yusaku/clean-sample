import { injectable } from 'tsyringe';
import { container } from "tsyringe";
import { UserInputData } from "./UserInputData";
import { IUserInputUsecase } from "./IUserInputUsecase";
import { IUserOutputUsecase } from "./IUserOutputUsecase";
import { IUserDataGateway } from "../../interface/gateway/IUserDataGateway";
import { UserOutputData } from "./UserOutputData";

import { User } from "../../entity/User";

@injectable()
export class UserUsescaseInteractor implements IUserInputUsecase {
    handle(userInputData: UserInputData): void {

        var user:User = new User();
        user.emailAddress = userInputData.emailAddress;
        user.name = userInputData.firstName + ' ' + userInputData.secondName;

        var userRepository : IUserDataGateway = container.resolve('UserDataAccess');
        userRepository.addNewUser(user);

        var userOutputData: UserOutputData = new UserOutputData();
        userOutputData.emailAddress = user.emailAddress;
        userOutputData.name = user.name;
        
        var outputUsecase: IUserOutputUsecase = container.resolve('UserPresenter');
        outputUsecase.handle(userOutputData);
    }
    
}