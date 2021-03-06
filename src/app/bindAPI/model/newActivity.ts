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


export interface NewActivity {
    Comment: string;
    StartDate: Date;
    EndDate: Date;
    EventType: string;
    IsPublic: boolean;
    Title: string;
    Repeatable: boolean;
    RepeatInterval?: number;
    RepeatType?: number;
    Repetitions?: number;
    ExternalID?: string;
    ExternalIDType?: number;
}
