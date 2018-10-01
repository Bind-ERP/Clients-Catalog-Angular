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


export interface ClientDetails {
    ID?: string;
    RFC?: string;
    LegalName?: string;
    CommercialName?: string;
    CreditDays?: number;
    CreditAmount?: number;
    PaymentMethod?: string;
    CreationDate?: Date;
    Status?: string;
    SalesContact?: string;
    CreditContact?: string;
    Loctaion?: string;
    LoctaionID?: string;
    Comments?: string;
    PriceList?: string;
    PriceListID?: string;
    PaymentTermType?: string;
    Email?: string;
    Telephones?: string;
    Number?: number;
    AccountNumber?: string;
    DefaultDiscount?: number;
    ClientSource?: string;
    Account?: string;
    City?: string;
    State?: string;
    Addresses?: Array<string>;
}
