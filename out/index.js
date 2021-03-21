"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const UserUsecaseInteractor_1 = require("./usecase/users/UserUsecaseInteractor");
const UserDataAccess_1 = require("./infrastructure/UserDataAccess");
const UserPresenter_1 = require("./usecase/users/UserPresenter");
tsyringe_1.container.register('UserUsecaseInteractor', { useClass: UserUsecaseInteractor_1.UserUsescaseInteractor });
tsyringe_1.container.register('UserDataAccess', { useClass: UserDataAccess_1.UserDataAccess });
tsyringe_1.container.register('UserPresenter', { useClass: UserPresenter_1.UserPresenter });
const UserController_1 = require("./usecase/users/UserController");
var userController = new UserController_1.UserController();
userController.AddNewUser('first', 'second', 'ysk.ikeda@gmail.com');
//# sourceMappingURL=index.js.map