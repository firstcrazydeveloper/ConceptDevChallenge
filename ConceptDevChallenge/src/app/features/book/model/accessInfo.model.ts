export class AccessInfo {
    public country: string;
    public viewability: string;
    public embeddable: Boolean;
    public publicDomain: Boolean;
    public textToSpeechPermission: string;
    public epub: Epub;
    public pdf: Pdf;
    public webReaderLink: string;
    public accessViewStatus: string;
    public quoteSharingAllowed: Boolean;
}

export class Epub {
    public isAvailable: Boolean;
    public acsTokenLink: string;

}

export class Pdf {
    public isAvailable: Boolean;
    public acsTokenLink: string;
}


//"country": "IN",
//    "viewability": "PARTIAL",
//        "embeddable": true,
//            "publicDomain": false,
//                "textToSpeechPermission": "ALLOWED",
//                    "epub":{ "isAvailable": true, "acsTokenLink": "http://books.google.co.in/books/download/Microsoft_Visual_C_Step_by_Step-sample-epub.acsm?id=F-_SCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"… },
//"pdf":{ "isAvailable": true, "acsTokenLink": "http://books.google.co.in/books/download/Microsoft_Visual_C_Step_by_Step-sample-pdf.acsm?id=F-_SCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"… },
//"webReaderLink": "http://play.google.com/books/reader?id=F-_SCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//    "accessViewStatus": "SAMPLE",
//        "quoteSharingAllowed": false