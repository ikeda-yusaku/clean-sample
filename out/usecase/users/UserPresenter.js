"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPresenter = void 0;
const tsyringe_1 = require("tsyringe");
const UserViewModel_1 = require("./UserViewModel");
const UserView_1 = require("../../view/UserView");
let UserPresenter = class UserPresenter {
    handle(userOutputData) {
        var viewModel = new UserViewModel_1.UserViewModel();
        viewModel.name = userOutputData.name;
        viewModel.emailAddress = userOutputData.emailAddress;
        var view = new UserView_1.UserView();
        view.showMessage(viewModel);
    }
};
UserPresenter = __decorate([
    tsyringe_1.injectable()
], UserPresenter);
exports.UserPresenter = UserPresenter;
//# sourceMappingURL=UserPresenter.js.map