import { User } from "../../entity/User";
export interface IUserDataGateway {
    addNewUser(user:User):void;
    getUser(mailAddress: string):User;
}