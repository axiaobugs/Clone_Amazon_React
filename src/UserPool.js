import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : "ap-southeast-2_WL2kx5i55",
    ClientId: "2f3ase86di421nv4lqg3p1lr19"
}

export default new CognitoUserPool(poolData);