import { UseGuards } from "@nestjs/common";
import { Context, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class CoreResolver {
    constructor(
        private coreService: CoreService,
    ) {}

    @Query(() => String)
    @UseGuards(GqlAuthGuard)
    getMyPanels(@Context() context) {
        const userId = context.req.user.id;
        return this.coreService.findPanelsByUserId(userId);
    }
}