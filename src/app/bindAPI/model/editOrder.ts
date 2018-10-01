/**
 * Bind ERP API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NewOrderProduct } from './newOrderProduct';
import { NewOrderService } from './newOrderService';


export interface EditOrder {
    ID: string;
    AddressID: string;
    ClientID: string;
    CurrencyID: string;
    LocationID: string;
    OrderDate: Date;
    PriceListID: string;
    WarehouseID: string;
    Comments?: string;
    DiscountAmount?: number;
    DiscountType?: number;
    DocNumberID?: string;
    ExchangeRate?: number;
    ISRRate?: number;
    PurchaseOrder?: string;
    VATRate?: number;
    VATRetRate?: number;
    Emails?: Array<string>;
    Products?: Array<NewOrderProduct>;
    Services?: Array<NewOrderService>;
}
