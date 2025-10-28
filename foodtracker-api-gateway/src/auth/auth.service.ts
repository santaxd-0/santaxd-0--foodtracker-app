import { HttpService } from "@nestjs/axios";
import { ConfigService} from "@nestjs/config"
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    private authServiceUrl: string;

    constructor (
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        this.authServiceUrl = this.configService.get<string>("AUTH_SERVICE_API_URL");
    }

    login (loginDto: any) {
        const data  = this.httpService.post(this.authServiceUrl, loginDto);
        return data;
    }
}