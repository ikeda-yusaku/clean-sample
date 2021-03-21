import { injectable } from 'tsyringe'

import { UserOutputData } from "./UserOutputData";
import { IUserOutputUsecase } from "./IUserOutputUsecase";
import { UserViewModel } from "./UserViewModel";
import { UserView } from "../../view/UserView";

@injectable()
export class UserPresenter implements IUserOutputUsecase {
    handle(userOutputData: UserOutputData): void {
        var viewModel = new UserViewModel();
        viewModel.name = userOutputData.name;
        viewModel.emailAddress = userOutputData.emailAddress;

        var view: UserView = new UserView();
        view.showMessage(viewModel);
    }

}