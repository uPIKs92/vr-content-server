import {Schema, type} from "@colyseus/schema";

export class Players extends Schema{
    @type("string") id : "2";
    @type("string") nama : "";
    @type("string") jenisUser = "Trainee";
    @type("number") x: number = 0;
    @type("number") y: number = 0;
}