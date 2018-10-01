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

import { EditWebHookSubscription } from '../model/editWebHookSubscription';
import { NewWebHookSubscription } from '../model/newWebHookSubscription';
import { WebHookPage } from '../model/webHookPage';
import { WebHookSubscriptionPage } from '../model/webHookSubscriptionPage';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class WebHooksService {

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
     * Suscribirse a un WebHook
     *
     * @param newWebHookSubscription
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksAddWebHookSubscriptions(newWebHookSubscription: NewWebHookSubscription, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public webHooksAddWebHookSubscriptions(newWebHookSubscription: NewWebHookSubscription, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public webHooksAddWebHookSubscriptions(newWebHookSubscription: NewWebHookSubscription, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public webHooksAddWebHookSubscriptions(newWebHookSubscription: NewWebHookSubscription, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (newWebHookSubscription === null || newWebHookSubscription === undefined) {
            throw new Error('Required parameter newWebHookSubscription was null or undefined when calling webHooksAddWebHookSubscriptions.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/WebHookSubscriptions`,
            newWebHookSubscription,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Borrar suscripción a WebHook
     *
     * @param id
     * @param subscriptionID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksDeleteWebHookSubscriptionByID(id: string, subscriptionID?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public webHooksDeleteWebHookSubscriptionByID(id: string, subscriptionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public webHooksDeleteWebHookSubscriptionByID(id: string, subscriptionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public webHooksDeleteWebHookSubscriptionByID(id: string, subscriptionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling webHooksDeleteWebHookSubscriptionByID.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (subscriptionID !== undefined) {
            queryParameters = queryParameters.set('subscriptionID', <any>subscriptionID);
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

        return this.httpClient.delete<any>(`${this.basePath}/api/WebHookSubscriptions`,
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
     * Editar suscripción a WebHook
     *
     * @param webHookSubscription
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksEditWebHookSubscription(webHookSubscription: EditWebHookSubscription, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public webHooksEditWebHookSubscription(webHookSubscription: EditWebHookSubscription, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public webHooksEditWebHookSubscription(webHookSubscription: EditWebHookSubscription, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public webHooksEditWebHookSubscription(webHookSubscription: EditWebHookSubscription, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (webHookSubscription === null || webHookSubscription === undefined) {
            throw new Error('Required parameter webHookSubscription was null or undefined when calling webHooksEditWebHookSubscription.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/WebHookSubscriptions`,
            webHookSubscription,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene un ejemplo del modelo de datos que envía el WebHook.
     *
     * @param eventID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksGetWebHookSampleData(eventID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public webHooksGetWebHookSampleData(eventID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public webHooksGetWebHookSampleData(eventID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public webHooksGetWebHookSampleData(eventID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (eventID === null || eventID === undefined) {
            throw new Error('Required parameter eventID was null or undefined when calling webHooksGetWebHookSampleData.');
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

        return this.httpClient.get<any>(`${this.basePath}/api/WebHooks/${encodeURIComponent(String(eventID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de su suscripciones a WebHooks
     *
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksGetWebHookSubscriptions(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<WebHookSubscriptionPage>;
    public webHooksGetWebHookSubscriptions(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WebHookSubscriptionPage>>;
    public webHooksGetWebHookSubscriptions(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WebHookSubscriptionPage>>;
    public webHooksGetWebHookSubscriptions(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<WebHookSubscriptionPage>(`${this.basePath}/api/WebHookSubscriptions`,
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
     * Obtiene la lista de WebHooks disponibles.
     *
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webHooksGetWebHooks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<WebHookPage>;
    public webHooksGetWebHooks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WebHookPage>>;
    public webHooksGetWebHooks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WebHookPage>>;
    public webHooksGetWebHooks(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<WebHookPage>(`${this.basePath}/api/WebHooks`,
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
