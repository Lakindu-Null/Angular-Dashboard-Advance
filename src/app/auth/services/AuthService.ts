import { Injectable } from "@angular/core";
import { CommonFuntion } from "../../common/CommonFuntion";

@Injectable()
export class AuthService {

  modulePolicyApproved(module: number, frame: number) 
  {
    let status = false;
    if (CommonFuntion.userPolicy != undefined && CommonFuntion.userPolicy != null) {
      let filterPolicy: any[] = CommonFuntion.userPolicy
        .filter(policy => policy.id === module || policy.id === frame || policy.id === 1);
      if (filterPolicy.length > 0) (status = true)
    }
    return status;
  }
}