export interface CommonInterface {
    verifyAllProperties: (response: JSON, properties: Array<string> | string) => void
    verifyPropertiesNotExist: (response: JSON, properties: Array<string> | string) => void
    verifyStatusCode: (actualResult: number, expectedResult: number) => void
    verifyJson: (actualResult: JSON, expectedResult: JSON) => void
}

