import { VolumeInfo } from './volumeInfo.model';
import { AccessInfo } from './accessInfo.model';
import { SaleInfo } from './saleInfo.model';
import { SearchInfo } from './searchInfo.model';

export class BookItem {
    public kind: string;
    public id: string;
    public etag: string;
    public selfLink: string;
    public volumeInfo: VolumeInfo;
    public saleInfo: SaleInfo;
    public accessInfo: AccessInfo;
    public searchInfo: SearchInfo;
}