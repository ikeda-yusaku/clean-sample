import { injectable } from 'tsyringe';
import { IUserDataGateway } from "../interface/gateway/IUserDataGateway";
import { User } from "../entity/User";

@injectable()
export class UserDataAccess implements IUserDataGateway {
    addNewUser(user: User): void {
        //throw new Error("Method not implemented.");
    }

    getUser(mailAddress: string): User {
        //throw new Error("Method not implemented.");
        return new User();
    }
    
}