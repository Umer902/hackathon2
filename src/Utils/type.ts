import { StaticImageData } from "next/image";

export type Product={

id:number;
name:string;
tagline:string;
price:number;
category:string;
image:StaticImageData | string;
};