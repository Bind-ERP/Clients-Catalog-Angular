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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InvoiceDetails } from '../model/invoiceDetails';
import { InvoiceListItemPage } from '../model/invoiceListItemPage';
import { NewInvoice } from '../model/newInvoice';
import { NewPayment } from '../model/newPayment';
import { PaymentListItemPage } from '../model/paymentListItemPage';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class InvoicesService {

    protected basePath = 'https://api.bind.com.mx';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Agregar Venta
     *
     * @param newInvoice
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesAddInvoice(newInvoice: NewInvoice, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public invoicesAddInvoice(newInvoice: NewInvoice, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public invoicesAddInvoice(newInvoice: NewInvoice, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public invoicesAddInvoice(newInvoice: NewInvoice, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (newInvoice === null || newInvoice === undefined) {
            throw new Error('Required parameter newInvoice was null or undefined when calling invoicesAddInvoice.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<string>(`${this.basePath}/api/Invoices`,
            newInvoice,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Registrar pago a venta
     *
     * @param newPayment
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesAddPayment(newPayment: NewPayment, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public invoicesAddPayment(newPayment: NewPayment, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public invoicesAddPayment(newPayment: NewPayment, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public invoicesAddPayment(newPayment: NewPayment, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (newPayment === null || newPayment === undefined) {
            throw new Error('Required parameter newPayment was null or undefined when calling invoicesAddPayment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/api/Invoices/Payment`,
            newPayment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Eliminar factura
     *
     * @param idOrNumber
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesDeleteInvoice(idOrNumber: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public invoicesDeleteInvoice(idOrNumber: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public invoicesDeleteInvoice(idOrNumber: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public invoicesDeleteInvoice(idOrNumber: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idOrNumber === null || idOrNumber === undefined) {
            throw new Error('Required parameter idOrNumber was null or undefined when calling invoicesDeleteInvoice.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/Invoices/${encodeURIComponent(String(idOrNumber))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de ventas.
     * El filtro es opcional
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<InvoiceListItemPage>;
    public invoicesGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InvoiceListItemPage>>;
    public invoicesGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InvoiceListItemPage>>;
    public invoicesGet(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<InvoiceListItemPage>(`${this.basePath}/api/Invoices`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene los detalles de una venta por número
     *
     * @param idOrNumber
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesGetByNumber(idOrNumber: string, observe?: 'body', reportProgress?: boolean): Observable<InvoiceDetails>;
    public invoicesGetByNumber(idOrNumber: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InvoiceDetails>>;
    public invoicesGetByNumber(idOrNumber: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InvoiceDetails>>;
    public invoicesGetByNumber(idOrNumber: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idOrNumber === null || idOrNumber === undefined) {
            throw new Error('Required parameter idOrNumber was null or undefined when calling invoicesGetByNumber.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<InvoiceDetails>(`${this.basePath}/api/Invoices/${encodeURIComponent(String(idOrNumber))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener el PDF de una venta
     *
     * @param id ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesGetPDF(id: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public invoicesGetPDF(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public invoicesGetPDF(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public invoicesGetPDF(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling invoicesGetPDF.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/api/Invoices/${encodeURIComponent(String(id))}/pdf`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener pagos de una factura.
     *
     * @param invoiceID
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesGetPayment(invoiceID: string, filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<PaymentListItemPage>;
    public invoicesGetPayment(invoiceID: string, filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaymentListItemPage>>;
    public invoicesGetPayment(invoiceID: string, filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaymentListItemPage>>;
    public invoicesGetPayment(invoiceID: string, filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invoiceID === null || invoiceID === undefined) {
            throw new Error('Required parameter invoiceID was null or undefined when calling invoicesGetPayment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<PaymentListItemPage>(`${this.basePath}/api/Invoices/Payment/${encodeURIComponent(String(invoiceID))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener el XML de una venta
     *
     * @param id ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invoicesGetXML(id: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public invoicesGetXML(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public invoicesGetXML(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public invoicesGetXML(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling invoicesGetXML.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/api/Invoices/${encodeURIComponent(String(id))}/xml`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}