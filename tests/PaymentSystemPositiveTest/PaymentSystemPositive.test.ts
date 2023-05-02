import Common from "../../src/Common/Common";
import PaymentSystemPositive from "../../src/PaymentSystemPositive/PaymentSystemPositive";

describe('Verify the correctness of the API response with correct parameters', () => {
    it('Verify API response with "ATUSD" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystemPositive.getPaymentSystems('WWC', "ATUSD")
        Common.verifyStatusCode(paymentResponse.status, 200)
        Common.verifyAllProperties(paymentResponse.data.receive, ['ATUAH', 'ATBRL', 'PURPLE', 'ATUSD'])
    }, 10000)

    it('Verify API response with "ATUAH" asset and "RU" country', async () => {
        const paymentResponse = await PaymentSystemPositive.getPaymentSystems('RU', "ATUAH")
        Common.verifyStatusCode(paymentResponse.status, 200)
        Common.verifyAllProperties(paymentResponse.data.receive, 'ATUAH')
    }, 10000)

    it('Verify API response with "ATBRL" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystemPositive.getPaymentSystems('WWC', "ATBRL")
        Common.verifyStatusCode(paymentResponse.status, 200)
        Common.verifyAllProperties(paymentResponse.data.receive, ['ATUAH', 'ATBRL', 'PURPLE'])
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, 'ATUSD')
    }, 10000)

    it('Verify API response with "PURPLE" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystemPositive.getPaymentSystems('WWC', "PURPLE")
        Common.verifyStatusCode(paymentResponse.status, 200)
        Common.verifyAllProperties(paymentResponse.data.receive, ['ATUAH', 'ATBRL', 'PURPLE'])
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, 'ATUSD')
    }, 10000)
})