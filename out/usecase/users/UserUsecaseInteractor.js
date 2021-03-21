"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsescaseInteractor = void 0;
const tsyringe_1 = require("tsyringe");
const tsyringe_2 = require("tsyringe");
const UserOutputData_1 = require("./UserOutputData");
const User_1 = require("../../entity/User");
let UserUsescaseInteractor = class UserUsescaseInteractor {
    handle(userInputData) {
        var user = new User_1.User();
        user.emailAddress = userInputData.emailAddress;
        user.name = userInputData.firstName + ' ' + userInputData.secondName;
        var userRepository = tsyringe_2.container.resolve('UserDataAccess');
        userRepository.addNewUser(user);
        var userOutputData = new UserOutputData_1.UserOutputData();
        userOutputData.emailAddress = user.emailAddress;
        userOutputData.name = user.name;
        var outputUsecase = tsyringe_2.container.resolve('UserPresenter');
        outputUsecase.handle(userOutputData);
    }
};
UserUsescaseInteractor = __decorate([
    tsyringe_1.injectable()
], UserUsescaseInteractor);
exports.UserUsescaseInteractor = UserUsescaseInteractor;
//# sourceMappingURL=UserUsecaseInteractor.js.map