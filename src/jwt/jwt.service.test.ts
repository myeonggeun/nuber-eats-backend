import * as jwt_service from "./jwt.service"

// @ponicode
describe("sign", () => {
    let inst: any

    beforeEach(() => {
        inst = new jwt_service.JwtService({ privateKey: "username" })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.sign(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.sign(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.sign(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.sign("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.sign("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.sign(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("verify", () => {
    let inst: any

    beforeEach(() => {
        inst = new jwt_service.JwtService({ privateKey: "user123" })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.verify(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.verify("@")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.verify("/*")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.verify("):")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.verify("{")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.verify("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
