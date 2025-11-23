import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
    constructor (
        private authService: AuthService
    ) {}

    @Mutation(() => String)
    login(@Args("loginInput") loginInput: any){
        this.authService.login(loginInput);
    }
}
