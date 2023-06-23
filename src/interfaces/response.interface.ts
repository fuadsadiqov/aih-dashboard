export interface ResponseType{
    title: string
    value: number | number[] | null
    children?: Array<ResponseType> 
}