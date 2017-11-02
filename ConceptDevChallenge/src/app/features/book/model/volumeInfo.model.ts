export class VolumeInfo {
    public title: string;
    public authors: Array<string>;
    public publisher: string;
    public publishedDate: string;
    public description: string;
    
    
    public pageCount: number;
    public printType: string;
    public categories: Array<string>;
    public averageRating: number;
    public ratingsCount: number;
    public maturityRating: string;
    public allowAnonLogging: Boolean;
    public contentVersion: string;

    
    public language: string;
    public previewLink: string;
    public infoLink: string;
    public canonicalVolumeLink: string;

    public industryIdentifiers: Array<IndustryIdentifier>;
    public readingModes: ReadingModes;
    public panelizationSummary: PanelizationSummary;
    public imageLinks: ImageLinks;
}

export class  IndustryIdentifier {
    public type: string;
    public identifier: string;

}

export class ReadingModes {
    public text: Boolean;
    public image: Boolean;

}

export class PanelizationSummary {
    public containsEpubBubbles: Boolean;
    public containsImageBubbles: Boolean;

}

export class ImageLinks {
    public smallThumbnail: string;
    public thumbnail: string;

}

//"title": "Microsoft Visual C# Step by Step",
//    "authors":["John Sharp"],
//        "publisher": "Microsoft Press",
//            "publishedDate": "2015-10-28",
//                "description": "Your hands-on guide to Microsoft Visual C# fundamentals with Visual Studio 2015 Expand your expertise--and teach yourself the fundamentals of programming with the latest version of Visual C# with Visual Studio 2015. If you are an experienced software developer, you’ll get all the guidance, exercises, and code you need to start building responsive, scalable Windows 10 and Universal Windows Platform applications with Visual C#. Discover how to: Quickly start creating Visual C# code and projects with Visual Studio 2015 Work with variables, operators, expressions, and methods Control program flow with decision and iteration statements Build more robust apps with error, exception, and resource management Master the essentials of Visual C# object-oriented programming Use enumerations, structures, generics, collections, indexers, and other advanced features Create in-memory data queries with LINQ query expressions Improve application throughput and response time with asynchronous methods Decouple application logic and event handling Streamline development with new app templates Implement the Model-View-ViewModel (MVVM) pattern Build Universal Windows Platform apps that smoothly adapt to PCs, tablets, and Windows phones Integrate Microsoft Azure cloud databases and RESTful web services About You For software developers who are new to Visual C# or who are upgrading from older versions Readers should have experience with at least one programming language No prior Microsoft .NET or Visual Studio development experience required",
//                    "industryIdentifiers":[{ "type": "ISBN_13", "identifier": "9781509301065" }, { "type": "ISBN_10", …],
//                        "readingModes":{ "text": true, "image": true },
//"pageCount": 816,
//    "printType": "BOOK",
//        "categories":["Computers"],
//            "averageRating": 4,
//                "ratingsCount": 1,
//                    "maturityRating": "NOT_MATURE",
//                        "allowAnonLogging": true,
//                            "contentVersion": "1.1.1.0.preview.3",
//                                "panelizationSummary":{ "containsEpubBubbles": false, "containsImageBubbles": false },
//"imageLinks":{ "smallThumbnail": "http://books.google.com/books/content?id=F-_SCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", … },
//"language": "en",
//    "previewLink": "http://books.google.co.in/books?id=F-_SCgAAQBAJ&pg=PA1&dq=ISBN:9788120352063&hl=&cd=1&source=gbs_api",
//        "infoLink": "https://play.google.com/store/books/details?id=F-_SCgAAQBAJ&source=gbs_api",
//            "canonicalVolumeLink": "https://market.android.com/details?id=book-F-_SCgAAQBAJ"