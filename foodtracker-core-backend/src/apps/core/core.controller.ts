import { Controller, Get } from "@nestjs/common";
import { CoreService } from "./core.service";

import type { Panel } from "./interfaces/panel.interface";


@Controller("main")
export class CoreController {
    constructor(private readonly coreService: CoreService) {}

    @Get()
    getList(): Panel {
        return this.coreService.getList();
    }
}