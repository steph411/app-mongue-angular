import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UpdatePatientComponent } from './components/patients/update-patient/update-patient.component';
import { PatientListComponent } from './components/patients/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { CreatePatientComponent } from './components/patients/create-patient/create-patient.component';
import { CreateRdvComponent } from './components/rdv/create-rdv/create-rdv.component';
import { UpdateRdvComponent } from './components/rdv/update-rdv/update-rdv.component';
import { RdvListComponent } from './components/rdv/rdv-list/rdv-list.component';
import { CreateConsultationComponent } from './components/consultation/create-consultation/create-consultation.component';
import { UpdateConsultationComponent } from './components/consultation/update-consultation/update-consultation.component';
import { ConsultationListComponent } from './components/consultation/consultation-list/consultation-list.component';
import { PatientRecordComponent } from './components/patients/patient-record/patient-record.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './components/home/home.component';
import { CreateFactureComponent } from './components/factures/create-facture/create-facture.component';
import { UpdateFactureComponent } from './components/factures/update-facture/update-facture.component';
import { FactureListComponent } from './components/factures/facture-list/facture-list.component';
import { FactureDetailsComponent } from './components/factures/facture-details/facture-details.component';
import { RdvDetailsComponent } from './components/rdv/rdv-details/rdv-details.component';
import { RdvInfoPersComponent } from './components/rdv/rdv-info-pers/rdv-info-pers.component';
import { InfoClinicComponent } from './components/consultation/info-clinic/info-clinic.component';
import { UpdateInfoClinicComponent } from './components/consultation/update-info-clinic/update-info-clinic.component';
import { ConsultationDetailsComponent } from './components/consultation/consultation-details/consultation-details.component';
import { ListPatientRdvComponent } from './components/rdv/list-patient-rdv/list-patient-rdv.component';
// import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
// import {MenuItem} from 'primeng/api';                  // api

@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    PatientListComponent,
    UpdatePatientComponent,
    CreateRdvComponent,
    UpdateRdvComponent,
    RdvListComponent,
    CreateConsultationComponent,
    UpdateConsultationComponent,
    ConsultationListComponent,
    PatientRecordComponent,
    RegisterComponent,
    LogInComponent,
    HomeComponent,
    CreateFactureComponent,
    UpdateFactureComponent,
    FactureListComponent,
    FactureDetailsComponent,
    RdvDetailsComponent,
    RdvInfoPersComponent,
    InfoClinicComponent,
    UpdateInfoClinicComponent,
    ConsultationDetailsComponent,
    ListPatientRdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
