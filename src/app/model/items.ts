export class Items {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string

    constructor (id,name,description="",price=0,imageUrl="https://i.allo.ua/media/catalog/product/cache/3/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_xr_red_1.jpg") {
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl
    }
}
