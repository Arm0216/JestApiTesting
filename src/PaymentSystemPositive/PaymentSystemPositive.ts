import conf from '../../conf.json'
import axios, {AxiosResponse} from "axios";
class PaymentSystemPositive{
    private readonly baseUrl
    constructor() {
        this.baseUrl = conf.baseApiUrl
    }
    public async getPaymentSystems(countries: string, asset: string): Promise<AxiosResponse<any, any>> {
        return await axios.get(`${this.baseUrl}/payments/edeab824-178e-4fd7-9bf0-bd88a6fd114a/sep0031/info?countries=${countries}&asset=${asset}`)
    }
}

export default new PaymentSystemPositive()