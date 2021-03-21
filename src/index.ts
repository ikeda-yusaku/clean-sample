
import "reflect-metadata";
import {container} from "tsyringe";

import {UserUsescaseInteractor} from "./usecase/users/UserUsecaseInteractor"
import {UserDataAccess} from "./infrastructure/UserDataAccess"
import {UserPresenter} from "./usecase/users/UserPresenter"

container.register('UserUsecaseInteractor', {useClass: UserUsescaseInteractor})
container.register('UserDataAccess', {useClass: UserDataAccess})
container.register('UserPresenter', {useClass: UserPresenter})


import { UserController } from "./usecase/users/UserController";
var userController = new UserController();
userController.AddNewUser('first', 'second', 'aaaa@bbb.com');
