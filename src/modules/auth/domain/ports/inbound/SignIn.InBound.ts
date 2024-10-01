export interface SignInInBound {
  signIn(signInRequest: any, user: any): Promise<string>;
}
