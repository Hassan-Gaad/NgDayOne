import { EventEmitter } from "@angular/core";
import { Product } from "../_models/product.model";

export class ProductService {

    itemAdded=new EventEmitter<Product>();
    refreshList=new EventEmitter<Product[]>();

    productListArray:Product[] =
        [
            {
                id: 0,
                name: "product0",
                price: 100,
                imgUrl: "assets/img/layout-styles.png",
                discount: 20
            },
            {
                id: 1,
                name: "product1",
                price: 101,
                imgUrl: "assets/img/layout-styles.png",
                discount: 21
            },
            {
                id: 2,
                name: "product2",
                price: 102,
                imgUrl: "assets/img/layout-styles.png",
                discount: 22
            },
            {
                id: 3,
                name: "product3",
                price: 103,
                imgUrl: "assets/img/layout-styles.png",
                discount: 23
            },
            {
                id: 4,
                name: "product4",
                price: 104,
                imgUrl: "assets/img/layout-styles.png",
                discount: 24
            },
            {
                id: 5,
                name: "product5",
                price: 105,
                imgUrl: "assets/img/layout-styles.png",
                discount: 25
            },
            {
                id: 6,
                name: "product6",
                price: 106,
                imgUrl: "assets/img/layout-styles.png",
                discount: 26
            },
            {
                id: 7,
                name: "product7",
                price: 107,
                imgUrl: "assets/img/layout-styles.png",
                discount: 27
            },
            {
                id: 8,
                name: "product8",
                price: 108,
                imgUrl: "assets/img/layout-styles.png",
                discount: 28
            },
            {
                id: 9,
                name: "product9",
                price: 109,
                imgUrl: "assets/img/layout-styles.png",
                discount: 29
            },
            {
                id: 10,
                name: "product10",
                price: 110,
                imgUrl: "assets/img/layout-styles.png",
                discount: 30
            },
            {
                id: 11,
                name: "product11",
                price: 111,
                imgUrl: "assets/img/layout-styles.png",
                discount: 31
            },
            {
                id: 12,
                name: "product12",
                price: 112,
                imgUrl: "assets/img/layout-styles.png",
                discount: 32
            },
            {
                id: 13,
                name: "product13",
                price: 113,
                imgUrl: "assets/img/layout-styles.png",
                discount: 33
            },
            {
                id: 14,
                name: "product14",
                price: 114,
                imgUrl: "assets/img/layout-styles.png",
                discount: 34
            },
            {
                id: 15,
                name: "product15",
                price: 115,
                imgUrl: "assets/img/layout-styles.png",
                discount: 35
            },
            {
                id: 16,
                name: "product16",
                price: 116,
                imgUrl: "assets/img/layout-styles.png",
                discount: 36
            },
            {
                id: 17,
                name: "product17",
                price: 117,
                imgUrl: "assets/img/layout-styles.png",
                discount: 37
            },
            {
                id: 18,
                name: "product18",
                price: 118,
                imgUrl: "assets/img/layout-styles.png",
                discount: 38
            },
            {
                id: 19,
                name: "product19",
                price: 119,
                imgUrl: "assets/img/layout-styles.png",
                discount: 39
            },
            {
                id: 20,
                name: "product20",
                price: 120,
                imgUrl: "assets/img/layout-styles.png",
                discount: 40
            },
            {
                id: 21,
                name: "product21",
                price: 121,
                imgUrl: "assets/img/layout-styles.png",
                discount: 41
            },
            {
                id: 22,
                name: "product22",
                price: 122,
                imgUrl: "assets/img/layout-styles.png",
                discount: 42
            },
            {
                id: 23,
                name: "product23",
                price: 123,
                imgUrl: "assets/img/layout-styles.png",
                discount: 43
            },
            {
                id: 24,
                name: "product24",
                price: 124,
                imgUrl: "assets/img/layout-styles.png",
                discount: 44
            },
            {
                id: 25,
                name: "product25",
                price: 125,
                imgUrl: "assets/img/layout-styles.png",
                discount: 45
            },
            {
                id: 26,
                name: "product26",
                price: 126,
                imgUrl: "assets/img/layout-styles.png",
                discount: 46
            },
            {
                id: 27,
                name: "product27",
                price: 127,
                imgUrl: "assets/img/layout-styles.png",
                discount: 47
            },
            {
                id: 28,
                name: "product28",
                price: 128,
                imgUrl: "assets/img/layout-styles.png",
                discount: 48
            },
            {
                id: 29,
                name: "product29",
                price: 129,
                imgUrl: "assets/img/layout-styles.png",
                discount: 49
            },
            {
                id: 30,
                name: "product30",
                price: 130,
                imgUrl: "assets/img/layout-styles.png",
                discount: 50
            },
            {
                id: 31,
                name: "product31",
                price: 131,
                imgUrl: "assets/img/layout-styles.png",
                discount: 51
            },
            {
                id: 32,
                name: "product32",
                price: 132,
                imgUrl: "assets/img/layout-styles.png",
                discount: 52
            },
            {
                id: 33,
                name: "product33",
                price: 133,
                imgUrl: "assets/img/layout-styles.png",
                discount: 53
            },
            {
                id: 34,
                name: "product34",
                price: 134,
                imgUrl: "assets/img/layout-styles.png",
                discount: 54
            },
            {
                id: 35,
                name: "product35",
                price: 135,
                imgUrl: "assets/img/layout-styles.png",
                discount: 55
            },
            {
                id: 36,
                name: "product36",
                price: 136,
                imgUrl: "assets/img/layout-styles.png",
                discount: 56
            },
            {
                id: 37,
                name: "product37",
                price: 137,
                imgUrl: "assets/img/layout-styles.png",
                discount: 57
            },
            {
                id: 38,
                name: "product38",
                price: 138,
                imgUrl: "assets/img/layout-styles.png",
                discount: 58
            },
            {
                id: 39,
                name: "product39",
                price: 139,
                imgUrl: "assets/img/layout-styles.png",
                discount: 59
            }
        ]


    getAllProducts() :Product[]{
        return [...this.productListArray]

    }
    getProductById(id: number):Product|undefined {
       return this.productListArray.find(value=>{value.id===id});
    }

    addProduct(product: Product) :Product[]{
        return[...this.productListArray,product];
    }

    updateProduct(product: Product):Product[] {
        const index=this.productListArray.findIndex(value=>{value.id===product.id});
        this.productListArray[index]=product;
        return[...this.productListArray];
    }

    deleteProduct(id: number):Product[] {
        const index=this.productListArray.findIndex(value=>value.id===id);
        console.log("index"+index);
        this.productListArray.splice(index,1);
        // console.log("on delete");
        console.log(this.productListArray);
        return this.productListArray;
    }
}