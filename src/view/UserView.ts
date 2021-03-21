import { UserViewModel } from "../usecase/users/UserViewModel";

export class UserView {
    showMessage(viewModel: UserViewModel) {
        console.log('Created User name -> %s, email -> %s', viewModel.name, viewModel.emailAddress);
    }
}