import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {
    Observable,
} from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx
import 'rxjs/add/operator/toPromise';
import {IClients} from "./IClients";
import {ToastsManager} from "ng2-toastr";


@Injectable()
export class ClientsService {

    constructor(private http: Http, private toastr: ToastsManager) {}

    getArticles(): Observable < IClients[] > {
        return this.http.get('client.json').map((response: Response) => {
            return <IClients[] > response.json()
        }).catch(this.handleError);
    }

    private handleError(errorResponse: Response) {
        this.toastr.error("Wrong");
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}