import { MouseEventHandler } from "react";

export interface button{
    title: string,
    containerStyles? : string,
    click: MouseEventHandler<HTMLButtonElement>
}