import { Injectable } from "@nestjs/common";
import type { Panel } from "./interfaces/panel.interface";


@Injectable()
export class CoreService {
    private readonly panels: Panel[] = []

    getPanel(): Panel[] {
        return this.panels;
    }

    createPanel(panel: Panel) {
        this.panels.push(panel);
    }
}