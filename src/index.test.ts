import {describe, expect, test} from '@jest/globals';
import {Factory1} from "./Base";
import {Factory2} from "./Factory2";

describe("Example failure", () => {
    test("Fails", () => {
        let anA = Factory1({Type: "A"})
        let aB = Factory1({Type: "B"})

        console.log(`Hi ${anA.Type} and ${aB.Type}`)
    })
    test("Works", () => {
        // TO get this to work you will have to comment out all references to factory 1.
        let anA = Factory2({Type: "A"})
        let aB = Factory2({Type: "B"})

        console.log(`Hi ${anA.Type} and ${aB.Type}`)
    })
})


