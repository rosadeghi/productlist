export interface productDTO {
    category:string
    description:string
    id:number
    image:string
    price:string
    rating:rating
    title:string
}
export interface rating{
   count:number
   rate:string
}