
export interface ISignInDataSource {
  signIn(signInRequest: any): Promise<string>
}