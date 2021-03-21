"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const UserInputData_1 = require("./UserInputData");
class UserController {
    AddNewUser(firstName, secondName, emailAddress) {
        var userInputData = new UserInputData_1.UserInputData();
        userInputData.firstName = firstName;
        userInputData.secondName = secondName;
        userInputData.emailAddress = emailAddress;
        var usecase = tsyringe_1.container.resolve('UserUsecaseInteractor');
        usecase.handle(userInputData);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map