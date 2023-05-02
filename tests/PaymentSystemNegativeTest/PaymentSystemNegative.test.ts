import Common from "../../src/Common/Common";
import PaymentSystemNegative from "../../src/PaymentSystemNegative/PaymentSystemNegative";

describe('Verify the correctness of the API response with invalid parameters', () => {
    it('Verify API response with "13" asset and "RU" countries', async () => {
        const expectedResult = {
            receive: {}
        }
        const paymentResponse = await PaymentSystemNegative.getPaymentSystems('RU', "123")
        console.log(paymentResponse.data)
        Common.verifyJson(paymentResponse.data, expectedResult)
    }, 10000)
})