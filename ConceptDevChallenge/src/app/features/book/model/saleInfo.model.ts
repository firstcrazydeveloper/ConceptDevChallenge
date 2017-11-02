export class SaleInfo {
    public country: string;
    public saleability: string;
    public isEbook: Boolean;
    public listPrice: ListPrice;
    public retailPrice: RetailPrice;
    public offers: Array<Offer>;
    public buyLink: string;
}

export class ListPrice {
    public amount: number;
    public currencyCode: string;

}

export class RetailPrice {
    public amount: number;
    public currencyCode: string;

}

export class Offer {
    public finskyOfferType: number;
    public listPrice: ListPrice;

}



//country": "IN",
//"saleability": "FOR_SALE",
//    "isEbook": true,
//        "listPrice":{ "amount": 2179.5, "currencyCode": "INR" },
//"retailPrice":{ "amount": 2179.5, "currencyCode": "INR" },
//"buyLink": "https://play.google.com/store/books/details?id=F-_SCgAAQBAJ&rdid=book-F-_SCgAAQBAJ&rdot=1&source=gbs_api",
//    "offers":[{ "finskyOfferType": 1, "listPrice": { "amountInMicros": 2179500000, "currencyCode": "INR"…]