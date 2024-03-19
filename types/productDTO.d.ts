export interface productDTO {
    id:number
    title:string
    imageUrl:string
    description:string
    stock:number
    categories:categoryDTO
}
export interface categoryDTO{
    name:string
}