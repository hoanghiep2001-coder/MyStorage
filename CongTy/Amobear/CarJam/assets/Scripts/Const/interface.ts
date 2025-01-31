import { Vec3 } from "cc";
import { CarSkin } from "../Car/CarSkin";

export interface CustomerQueue {
    id: number | null,
    position: Vec3 | null,
    isReady: boolean | null,
    rotate: number | null,
}

export interface CarStopsState {
    id: number | null,
    state: boolean | null,
    isReady: boolean | null,
    colorID: number | null,
    carSkin: CarSkin | null,
}