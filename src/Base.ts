import {A} from "./A";
import {B} from "./B";

export abstract class Base {
    protected constructor(
        public Type : "A" | "B"
    ) {
    }
}

export function Factory1(o? : Record<keyof Base, unknown>) : Base {
    switch (o?.Type) {
        case "A":
            return new A()
        case "B":
            return new B()
        default:
            throw new Error("Invalid object")
    }
}
