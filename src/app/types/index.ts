import { MouseEventHandler } from "react";

export interface button{
    title: string,
    containerStyles? : string,
    typebtn: string,
    click: MouseEventHandler<HTMLButtonElement>
}