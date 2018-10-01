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


export interface PaymentListItem {
    AccountMovementID?: string;
    AccountMovementNumber?: number;
    ApplicationDate?: Date;
    Comments?: string;
    Employee?: string;
    ExchangeRate?: number;
    ExternalID?: string;
    HasCancellationXML?: boolean;
    ID?: string;
    StatusCode?: number;
    Account?: string;
    Amount?: number;
    HasAccountingOperation?: boolean;
    StatusText?: string;
}