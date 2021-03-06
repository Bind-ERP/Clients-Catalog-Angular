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

import { Observable } from 'rxjs';

import { AccountingJournalPage } from '../model/accountingJournalPage';
import { EditAccountingJournal } from '../model/editAccountingJournal';
import { NewAccountingJournal } from '../model/newAccountingJournal';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AccountingJournalsService {

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
     * Agregar póliza contable
     *
     * @param newAccountingJournal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountingJournalsAddAccountingJournal(newAccountingJournal: NewAccountingJournal, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public accountingJournalsAddAccountingJournal(newAccountingJournal: NewAccountingJournal, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public accountingJournalsAddAccountingJournal(newAccountingJournal: NewAccountingJournal, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public accountingJournalsAddAccountingJournal(newAccountingJournal: NewAccountingJournal, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (newAccountingJournal === null || newAccountingJournal === undefined) {
            throw new Error('Required parameter newAccountingJournal was null or undefined when calling accountingJournalsAddAccountingJournal.');
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

        return this.httpClient.post<string>(`${this.basePath}/api/AccountingJournals`,
            newAccountingJournal,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Eliminar póliza contable
     *
     * @param idList
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountingJournalsDeleteAccountingJournal(idList: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public accountingJournalsDeleteAccountingJournal(idList: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public accountingJournalsDeleteAccountingJournal(idList: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public accountingJournalsDeleteAccountingJournal(idList: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idList === null || idList === undefined) {
            throw new Error('Required parameter idList was null or undefined when calling accountingJournalsDeleteAccountingJournal.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/AccountingJournals`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Editar póliza contable
     *
     * @param accountingJournal
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountingJournalsEditAccountingJournal(accountingJournal: EditAccountingJournal, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public accountingJournalsEditAccountingJournal(accountingJournal: EditAccountingJournal, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public accountingJournalsEditAccountingJournal(accountingJournal: EditAccountingJournal, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public accountingJournalsEditAccountingJournal(accountingJournal: EditAccountingJournal, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountingJournal === null || accountingJournal === undefined) {
            throw new Error('Required parameter accountingJournal was null or undefined when calling accountingJournalsEditAccountingJournal.');
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

        return this.httpClient.put<string>(`${this.basePath}/api/AccountingJournals`,
            accountingJournal,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de pólizas contables.
     *
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public accountingJournalsGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<AccountingJournalPage>;
    public accountingJournalsGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AccountingJournalPage>>;
    public accountingJournalsGet(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AccountingJournalPage>>;
    public accountingJournalsGet(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<AccountingJournalPage>(`${this.basePath}/api/AccountingJournals`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
