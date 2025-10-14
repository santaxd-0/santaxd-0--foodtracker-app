import { Get, Injectable } from "@nestjs/common";
import type { Panel } from "./interfaces/panel.interface";


@Injectable()
export class CoreService {
    @Get()
    getList(): Panel {
        return {
            name: "Test panel",
            callories: 300,
            product_list: [
                {
                    id: 1,
                    name: "Burger",
                    callories: 30,
                    pictureUrl: "url-to-burger-picture",
                    description: "So tasty burger, yummy!",
                    manufacturersBrand: "New Inc."
                },
                {
                    id: 2,
                    name: "Candy",
                    callories: 20,
                    pictureUrl: "url-to-candy-picture",
                    description: "So tasty candy, yummy!",
                    manufacturersBrand: "Second Inc."
                },
            ],
            color: "red"
        };
    }
}