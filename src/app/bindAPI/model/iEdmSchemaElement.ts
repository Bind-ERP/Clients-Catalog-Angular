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


export interface IEdmSchemaElement {
    SchemaElementKind?: IEdmSchemaElement.SchemaElementKindEnum;
    Namespace?: string;
    Name?: string;
}
export namespace IEdmSchemaElement {
    export type SchemaElementKindEnum = 'None' | 'TypeDefinition' | 'Function' | 'ValueTerm' | 'EntityContainer';
    export const SchemaElementKindEnum = {
        None: 'None' as SchemaElementKindEnum,
        TypeDefinition: 'TypeDefinition' as SchemaElementKindEnum,
        Function: 'Function' as SchemaElementKindEnum,
        ValueTerm: 'ValueTerm' as SchemaElementKindEnum,
        EntityContainer: 'EntityContainer' as SchemaElementKindEnum
    }
}