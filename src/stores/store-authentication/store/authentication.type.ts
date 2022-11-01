export interface IAuthenticationStore {
  accessToken: string | undefined;
  signinError: string | undefined;
  loadingSignin: boolean;
  signupError: string | undefined;
  loadingSignup: boolean;
  isRegisterSuccess: boolean;
}
