
import { EditClient } from './bindAPI/model/editClient';
import { Account } from './bindAPI/model/account';
import { AccountsService } from './bindAPI/api/accounts.service';
import { CatalogsService } from './bindAPI/api/catalogs.service';
import { PriceListPage } from './bindAPI/model/priceListPage';
import { PriceList } from './bindAPI/model/priceList';
import { NewAddress } from './bindAPI/model/newAddress';
import { Product } from './bindAPI/model/product';
import { Modal } from 'ngx-modal';
import { ProductsService } from './bindAPI/api/products.service';
import { ClientListItemPage } from './bindAPI/model/clientListItemPage';
import { ClientsService } from './bindAPI/api/clients.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ClientDetails, ClientListItem, NewClient, AccountPage } from './bindApi/model/models';
import { Observable } from 'rxjs';
import {ToastyConfig, ToastOptions, ToastData, ToastyService} from 'ng2-toasty';
import 'jquery';
import 'bootstrap';

interface ClientFieldErrors {
  LegalName?: boolean;
  CommercialName?: boolean;
  RFC?: boolean;
  CreditDays?: boolean;
  CreditAmount?: boolean;
  PriceListID?: boolean;
  AccountingNumber?: boolean;
  StreetName?: boolean;
  InterioNumber?: boolean;
  ExteriorNumber?: boolean;
  Colonia?: boolean;
  ZipCode?: boolean;
  City?: boolean;
  State?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'sdfnsdfn';
  public number: string;
  public name: string;
  public apiKey: string;
  public clients: ClientListItemPage;
  public itemsPerPage: number;
  public currentPage: number;
  public apiKeyError: boolean;
  public totalPages: number;
  public borderType: string;
  public borderColor: string;
  public Client: NewClient;
  public ClientFieldsErrors: ClientFieldErrors;
  public countErrors: number;
  public priceList: PriceListPage;
  public accountsList: AccountPage;
  public allChecked: boolean;
  public rfc: string;
  public checkBoxCount: number;
  public isProcessing: boolean;
  public existRows: boolean;
  public apiKeyInvalid: boolean;
  public existChecked: boolean;
  public existClientsToShow: boolean;
  public editClient: EditClient;
  public clientDetails: ClientDetails;

  constructor(private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private http: HttpClient,
    private accountService: AccountsService,
    private clientsService:  ClientsService,
    private priceListService: CatalogsService) {
    priceListService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    clientsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    accountService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    this.itemsPerPage = 10;
    this.currentPage = 0;
    toastyConfig.theme = 'bootstrap';
  }

  onSaveEditClient() {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;
    if (this.validateEditClient()) {
      this.clientsService.clientsEditClient({
        ID : this.clientDetails.ID,
        LegalName : this.clientDetails.LegalName,
        CommercialName : this.clientDetails.CommercialName,
        RFC : this.clientDetails.RFC,
        CreditDays : this.clientDetails.CreditDays,
        CreditAmount : this.clientDetails.CreditAmount,
        PriceListID : this.clientDetails.PriceListID,
        AccountingNumber : this.clientDetails.Account
      }).subscribe(data => {
        this.addSuccessToast('Editar cliente', 'Cliente editado con éxito');
        this.confirmClients();
        this.clientDetails = <ClientDetails>{};
        $('#EditModal').modal('hide');
        this.isProcessing = false;
      }, error => {
        this.handleError(error);
        this.isProcessing = false;
      });
    } else {
      this.addErrorToast('Editar Cliente', 'Hay campos en blanco');
      this.isProcessing  = false;
    }

  }

  confirmClientDetails(Id: string): void {
    this.validateApiKey();
    if (!this.apiKeyError) {
      this.searchCustomerDetails(Id);
    } else {
      this.addErrorToast('Token Error', 'No se ingreso el token de seguridad');
    }
  }

  getCustomerDetailsById(Id: string) {
    this.priceListService.defaultHeaders = null;
    this.priceListService.defaultHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.apiKey});
    return this.clientsService.clientsGetDetails(Id);
  }

  searchCustomerDetails(Id: string) {
    this.getCustomerDetailsById(Id).subscribe(data => {
      this.clientDetails = data;
      this.clientDetails.Account = this.clientDetails.Account.substring(0, this.clientDetails.Account.indexOf(' '));
    }, error => {
      this.clientDetails = null;
      this.handleError(error);
    });
  }

  onEditCustomer(Id: string) {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;

    this.validateApiKey();
    if (this.apiKeyError) {
      this.addErrorToast('Token Error', 'No has ingresado la API Key');
      return;
    }
    this.confirmClientDetails(Id);
    this.confirmPriceList('edit');
  }

  onCheck(checkBox: boolean) {
    this.existChecked = this.clients.value.filter(w => w.CheckBox === true).length > 0;
  }

  onDeleteCustomer(id: string) {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;
    this.validateApiKey();
    if (this.apiKeyError) {
      return;
    }
    this.clientsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    this.clientsService.clientsDeleteByID(id).subscribe(data => {
      this.addSuccessToast('Eliminar Cliente', 'Cliente eliminado con éxito');
      this.confirmClients();
      this.isProcessing = false;
    }, error => {
      this.isProcessing = false;
      this.handleError(error);
    } );

  }

  onDeleteCustomers(): void {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;

    let count = 0;
    this.clientsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    this.clients.value.forEach((element) => {
      if (element.CheckBox) {
        count++;
        this.clientsService.clientsDeleteByID(element.ID).subscribe(data => {
          this.isProcessing = false;
        }, error => {
          this.isProcessing = false;
          this.handleError(error);
        });
      }
    });
    if (count > 0) {
      this.addSuccessToast('Eliminar Clientes', 'Se eliminaron satisfactoriamente los clientes');
      this.confirmClients();
    } else {
      this.addErrorToast('Eliminar Clientes', 'No hay clientes para eliminar');
    }
  }

  handleError(error) {
    let message = '';
    message += error.error.message;
    if (error.error.code) {
      message += ' Código de Error: ' + error.error.code;
    }
    this.addErrorToast('Error', message);
  }

  onSelectAllCheckbox(){
    this.clients.value.forEach( (element) => {
      if (this.allChecked) {
        element.CheckBox = true;
      } else {
        element.CheckBox = false;
      }
    });
    this.existChecked = this.clients.value.filter(w => w.CheckBox === true).length > 0;
  }

  onSaveClient(): void {

    if (this.isProcessing) {
      return;
    }

    if (this.validateClient()) {
      this.isProcessing = true;
        this.clientsService.clientsAddClient(this.Client).subscribe(data => {
        this.addSuccessToast('Agregar Cliente', 'Se agregó con éxito el cliente');
        $('#AddModal').modal('hide');
        this.Client = <NewClient>{
          Address: <NewAddress>{}
        };
        this.confirmClients();
        this.isProcessing = false;
      }, error => {
        this.handleError(error);
        this.isProcessing = false;

      });

    } else {
      this.addErrorToast('Campos incorrectos', 'Parece que algunos campos estan incorrectos');
    }
  }

  validateEditClient(): boolean{
    const rfcPatt = new RegExp('[A-Z,a-z,ñ,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,a-z,0-9]?[A-Z,a-z,0-9]?[0-9,A-Z,a-z]?');
    const uuidPatt = new RegExp('[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}');
    this.ClientFieldsErrors = {
      LegalName: false,
      CommercialName: false,
      RFC: false,
      CreditDays: false,
      CreditAmount: false,
      PriceListID: false,
      AccountingNumber: false
    };

    this.countErrors = 0;

    if (!(this.clientDetails.LegalName !== null && this.clientDetails.LegalName !== undefined && this.clientDetails.LegalName !== '')) {
      this.ClientFieldsErrors.LegalName = true;
      this.countErrors++;
    }
    if (!(this.clientDetails.CommercialName !== null && this.clientDetails.CommercialName !== undefined && this.clientDetails.CommercialName !== '')) {
      this.ClientFieldsErrors.CommercialName = true;
      this.countErrors++;
    }
    if (!(this.clientDetails.RFC !== null && this.clientDetails.RFC !== undefined && this.clientDetails.RFC !== '' && rfcPatt.test(this.clientDetails.RFC))) {
      this.ClientFieldsErrors.RFC = true;
      this.countErrors++;
    }
    if (!(this.clientDetails.CreditDays !== null && this.clientDetails.CreditDays !== undefined && this.clientDetails.CreditDays !== '')) {
      this.ClientFieldsErrors.CreditDays = true;
      this.countErrors++;
    }
    if (!(this.clientDetails.CreditAmount !== null && this.clientDetails.CreditAmount !== undefined && this.clientDetails.CreditAmount !== '')) {
      this.ClientFieldsErrors.CreditAmount = true;
      this.countErrors++;
    }
    if (!(!this.clientDetails.PriceListID !== null && this.clientDetails.PriceListID !== undefined && this.clientDetails.PriceListID !== '' && uuidPatt.test(this.clientDetails.PriceListID))) {
      this.ClientFieldsErrors.PriceListID = true;
      this.countErrors++;
    }
    if (!(this.clientDetails.Account !== null && this.clientDetails.Account !== undefined && this.clientDetails.Account !== '')) {
      this.ClientFieldsErrors.AccountingNumber = true;
      this.countErrors++;
    }
    if (this.countErrors > 0) {
      return false;
    } else {
      return true;
    }
  }

  validateClient(): boolean{
    const rfcPatt = new RegExp('[A-Z,a-z,ñ,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,a-z,0-9]?[A-Z,a-z,0-9]?[0-9,A-Z,a-z]?');
    const uuidPatt = new RegExp('[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}');
    this.ClientFieldsErrors = {
      LegalName: false,
      CommercialName: false,
      RFC: false,
      CreditDays: false,
      CreditAmount: false,
      PriceListID: false,
      AccountingNumber: false,
      StreetName: false,
      InterioNumber: false,
      ExteriorNumber: false,
      Colonia: false,
      ZipCode: false,
      City: false,
      State: false
    };

    this.countErrors = 0;

    if (!(this.Client.LegalName !== null && this.Client.LegalName !== undefined)) {
      this.ClientFieldsErrors.LegalName = true;
      this.countErrors++;
    }
    if (!(this.Client.CommercialName !== null && this.Client.CommercialName !== undefined)) {
      this.ClientFieldsErrors.CommercialName = true;
      this.countErrors++;
    }
    if (!(this.Client.RFC !== null && this.Client.RFC !== undefined && rfcPatt.test(this.Client.RFC))) {
      this.ClientFieldsErrors.RFC = true;
      this.countErrors++;
    }
    if (!(this.Client.CreditDays !== null && this.Client.CreditDays !== undefined)) {
      this.ClientFieldsErrors.CreditDays = true;
      this.countErrors++;
    }
    if (!(this.Client.CreditAmount !== null && this.Client.CreditAmount !== undefined)) {
      this.ClientFieldsErrors.CreditAmount = true;
      this.countErrors++;
    }
    if (!(!this.Client.PriceListID !== null && this.Client.PriceListID !== undefined && uuidPatt.test(this.Client.PriceListID))) {
      this.ClientFieldsErrors.PriceListID = true;
      this.countErrors++;
    }
    if (!(this.Client.AccountingNumber !== null && this.Client.AccountingNumber !== undefined)) {
      this.ClientFieldsErrors.AccountingNumber = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.StreetName !== null && this.Client.Address.StreetName !== undefined)) {
      this.ClientFieldsErrors.StreetName = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.InteriorNumber !== null && this.Client.Address.InteriorNumber !== undefined)) {
      this.ClientFieldsErrors.InterioNumber = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.ExteriorNumber !== null && this.Client.Address.ExteriorNumber !== undefined)) {
      this.ClientFieldsErrors.ExteriorNumber = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.Colonia !== null && this.Client.Address.Colonia !== undefined)) {
      this.ClientFieldsErrors.Colonia = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.ZipCode !== null && this.Client.Address.ZipCode !== undefined)) {
      this.ClientFieldsErrors.ZipCode = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.City !== null && this.Client.Address.City !== undefined)) {
      this.ClientFieldsErrors.City = true;
      this.countErrors++;
    }
    if (!(this.Client.Address.State !== null && this.Client.Address.State !== undefined)) {
      this.ClientFieldsErrors.State = true;
      this.countErrors++;
    }
    if (this.countErrors > 0) {
      return false;
    } else {
      return true;
    }
  }

  addCustomer() {
    this.validateApiKey();
    if (this.apiKeyError) {
      this.addErrorToast('Token Error', 'No has ingresado la API Key');
      return;
    }
    this.clientsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    this.confirmPriceList('add');
  }

  addErrorToast(title: string, descrip: string) {
    this.toastyService.clearAll();
    var toastOptions: ToastOptions = {
      title: title,
      msg: descrip,
      showClose: true,
      timeout: 3000,
      theme: 'bootstrap'

    };
    this.toastyService.error(toastOptions);
  }

  addSuccessToast(title: string, descrip: string) {
    this.toastyService.clearAll();
    var toastOptions: ToastOptions = {
      title: title,
      msg: descrip,
      showClose: true,
      timeout: 3000,
      theme: 'bootstrap',
    };
    this.toastyService.success(toastOptions);
  }

  confirmAccounts(option: string): void {
    this.validateApiKey();
    if (!this.apiKeyError) {
      this.searchAccounts(option);
    } else {
      this.addErrorToast('Token Error', 'No se ingreso el token de seguridad');
    }
  }

  searchAccounts(option: string) {
    this.getAccountsList().subscribe(data => {
      this.accountsList = data;
      if (data.count > 0) {
        this.totalPages = Math.ceil(data.count / this.itemsPerPage);
      }
      if (option === 'add') {
        $('#AddModal').modal({
          backdrop: 'static'
        });
      }
      if (option === 'edit') {
        $('#EditModal').modal({
          backdrop: 'static'
        });
      }

      this.isProcessing = false;
    }, error => {
      this.accountsList.value = null;
      this.handleError(error);
      this.isProcessing = false;
    });
  }

  confirmClients(): void {
    this.validateApiKey();
    if (!this.apiKeyError) {
      this.searchClients();
    } else {
      this.addErrorToast('Token Error', 'No se ingreso el token de seguridad');
    }

  }

  searchClients(): void {
    this.getClients().subscribe(data => {
      this.clients = data;
      if (data.count > 0) {
        this.existClientsToShow = true;
        this.totalPages = Math.ceil(data.count / this.itemsPerPage);
        $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();
        });
      } else {
        this.existClientsToShow = false;
      }
    }, error => {
      this.clients.value = null;
      this.handleError(error);
    });
  }

  confirmPriceList(option: string): void {
    this.validateApiKey();
    if (!this.apiKeyError) {
      this.searchPriceList(option);
    } else {
      this.addErrorToast('Token Error', 'No se ingreso el token de seguridad');
    }
  }
  searchPriceList(option: string): void {
    this.getPriceList().subscribe(data => {
      this.priceList = data;
      if (data.count > 0) {
        this.totalPages = Math.ceil(data.count / this.itemsPerPage);
      }
      this.confirmAccounts(option);
    }, error => {
      this.handleError(error);
      this.priceList.value = null;
      this.isProcessing = false;
    });
  }

  validateApiKey(): void {
    if (!this.apiKey) {
      this.apiKeyError = true;
    } else {
      this.apiKeyError = false;
    }

  }



  getPriceList(): Observable<PriceListPage> {
    this.priceListService.defaultHeaders = null;
    this.priceListService.defaultHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.apiKey});
    return this.priceListService.catalogsGetPriceLists(undefined, undefined, this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  getAccountsList(): Observable<AccountPage> {
    this.accountService.defaultHeaders = null;
    this.accountService.defaultHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.apiKey});
    return this.accountService.accountsGet(undefined, undefined, this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  getClients(): Observable<ClientListItemPage> {
    this.clientsService.defaultHeaders = null;
    this.clientsService.defaultHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.apiKey});
    let filter = this.generateClientFilter();
    if(filter){
      this.currentPage = 0;
    }
    return this.clientsService.clientsGet(filter, undefined, this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  generateClientFilter(): string {
    if (this.number || this.name) {
      let filter = '';
      if (this.number) {
        filter += 'Number eq ' + this.number;
      }
      if (this.name) {
        if (filter) {
          filter += ' and ';
        }
        filter += 'ClientName eq \'' + this.name + '\'';
      }
      if (this.rfc) {
        if (filter) {
          filter += ' and ';
        }
        filter += 'ClientName eq \'' + this.rfc + '\'';
      }
      return filter;
    }
    return null;
  }

  ngOnInit(): void {

    this.clients = <ClientListItemPage>{
      value: <ClientListItem[]>[]
    };
    this.Client = <NewClient>{
      Address: <NewAddress>{}
    };
    this.ClientFieldsErrors = <ClientFieldErrors>{};
    this.ClientFieldsErrors = {
      LegalName: false,
      CommercialName: false,
      RFC: false,
      CreditDays: false,
      CreditAmount: false,
      PriceListID: false,
      AccountingNumber: false,
      StreetName: false,
      InterioNumber: false,
      ExteriorNumber: false,
      Colonia: false,
      ZipCode: false,
      City: false,
      State: false
    };
    this.priceList = <PriceListPage>{
      value : <PriceList[]>[]
    };
    this.accountsList = <AccountPage>{
      value : <Account[]>[]
    };
    this.borderType = null;
    this.borderColor = null;
    this.checkBoxCount = 0;
    this.isProcessing = false;
    this.existClientsToShow = false;
    this.editClient = <EditClient>{};
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.clientDetails = <ClientDetails>{};
  }


}
