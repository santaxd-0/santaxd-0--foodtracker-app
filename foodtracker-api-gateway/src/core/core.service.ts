import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Context } from "@nestjs/graphql";

@Injectable()
export class CoreService {
    private coreServiceUrl: string;

    constructor (
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        this.coreServiceUrl = this.configService.get<string>("CORE_SERVICE_API_URL");
    }

    findPanelsByUserId (@Context() context: any) {
        return;
    }
}