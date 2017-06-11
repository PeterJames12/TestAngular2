import {Component, Injectable} from "@angular/core";
import {
    ArticleService
} from './shared/articleservice';
import {IClients} from "./IClients";
import {ClientsService} from "./ClientsService";


@Component({
    selector: 'clients',
    templateUrl: 'client.component.html',
    styleUrls: ['client.components.css']
})

@Injectable()
export class ClientComponent {

    fullClients: IClients[];
    errorMessage: string;

    constructor(private _articleService: ClientsService) {
        this.fullClients = [];
    }

    ngOnInit(): void {
        let self = this;
        self._articleService.getArticles()
            .subscribe(response => this.fullClients = response, error => this.errorMessage = < any > error);
    }

    clients: any[] = [
        { firstName: 'Liana',
          lastName: 'Crooks',
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg',
          company: 'Ledner, Johnson and Predovic',
          title: 'Investor Functionality Coordinator'
        },

        { firstName: 'Deontae',
            lastName: 'Dare',
            avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg',
            company: "D'Amore, Dicki and Borer",
            title: 'International Applications Consultant'
        },

        { firstName: 'Cortez',
            lastName: 'Pacocha',
            avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg',
            company: 'McKenzie Group',
            title: 'Forward Branding Developer'
        },
        ];

    clientsFilter: any = { firstName: '' };

    clientFirstName: string = this.clients[0].firstName;
    clientLastName: string = this.clients[0].lastName;
    clientAvatar: string = this.clients[0].avatar;
    clientCompany: string = this.clients[0].company;
    clientTitle: string = this.clients[0].title;

    change(client:any){
        this.clientFirstName = client.firstName;
        this.clientLastName = client.lastName;
        this.clientAvatar = client.avatar;
        this.clientCompany = client.company;
        this.clientTitle = client.title;
    }
}
