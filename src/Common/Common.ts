import {CommonInterface} from './Common.interface'


class Common implements CommonInterface{
    public verifyAllProperties = (response: JSON, properties: Array<string> | string): void => {
        if (typeof properties !== "string") {
            for (let property of properties) {
                expect(response).toHaveProperty(property)
            }
        } else {
            expect(response).toHaveProperty(properties)
        }
    }

    public verifyPropertiesNotExist = (response: JSON, properties: Array<string> | string): void => {
        if (typeof properties !== "string") {
            for (let property of properties) {
                expect(response).not.toHaveProperty(property)
            }
        } else {
            expect(response).not.toHaveProperty(properties)
        }
    }

    public verifyStatusCode = (actualResult: number, expectedResult: number): void => {
        expect(actualResult).toEqual(expectedResult)
    }

    public verifyJson = (actualResult: JSON, expectedResult: {}): void => {
        expect(actualResult).toEqual(expectedResult)
    }
}

export default new Common()