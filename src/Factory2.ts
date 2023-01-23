import {A} from "./A";
import {B} from "./B";
import {Base} from "./Base";

export function Factory2(o? : Record<keyof Base, unknown>) : Base {
    switch (o?.Type) {
        case "A":
            return new A()
        case "B":
            return new B()
        default:
            throw new Error("Invalid object")
    }
}
