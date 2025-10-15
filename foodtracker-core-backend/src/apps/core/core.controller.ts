import { Controller, Get, Post, Body, HttpCode } from "@nestjs/common";
import { CoreService } from "./core.service";

import type { Panel } from "./interfaces/panel.interface";
import { CreatePanelDto } from "./dto/create-panel.dto";


@Controller("main")
export class CoreController {
    constructor(private readonly coreService: CoreService) {}

    @Get()
    getPanel(): Panel[] {
        return this.coreService.getPanel();
    }

    @Post()
    @HttpCode(201)
    createPanel(@Body() createPanelDto: CreatePanelDto) {
        this.coreService.createPanel(createPanelDto);
    }
}