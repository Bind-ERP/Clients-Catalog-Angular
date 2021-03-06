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

import { EditProvider } from '../model/editProvider';
import { NewProvider } from '../model/newProvider';
import { ProviderListItemPage } from '../model/providerListItemPage';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProvidersService {

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
     * Agregar Proveedor
     *
     * @param newProvider
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public providersAddProvider(newProvider: NewProvider, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public providersAddProvider(newProvider: NewProvider, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public providersAddProvider(newProvider: NewProvider, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public providersAddProvider(newProvider: NewProvider, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (newProvider === null || newProvider === undefined) {
            throw new Error('Required parameter newProvider was null or undefined when calling providersAddProvider.');
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

        return this.httpClient.post<string>(`${this.basePath}/api/Providers`,
            newProvider,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Borrar Proveedor
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public providersDeleteByID(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public providersDeleteByID(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public providersDeleteByID(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public providersDeleteByID(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling providersDeleteByID.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/Providers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Editar Proveedor
     *
     * @param provider
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public providersEditProvider(provider: EditProvider, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public providersEditProvider(provider: EditProvider, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public providersEditProvider(provider: EditProvider, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public providersEditProvider(provider: EditProvider, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling providersEditProvider.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/Providers`,
            provider,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de proveedores.
     *
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public providersGetProviders(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<ProviderListItemPage>;
    public providersGetProviders(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProviderListItemPage>>;
    public providersGetProviders(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProviderListItemPage>>;
    public providersGetProviders(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<ProviderListItemPage>(`${this.basePath}/api/Providers`,
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
