import { ListPatientRdvComponent } from './../components/rdv/list-patient-rdv/list-patient-rdv.component';
import { UpdateInfoClinicComponent } from './../components/consultation/update-info-clinic/update-info-clinic.component';
import { InfoClinicComponent } from './../components/consultation/info-clinic/info-clinic.component';
import { RdvDetailsComponent } from './../components/rdv/rdv-details/rdv-details.component';
import { RdvListComponent } from './../components/rdv/rdv-list/rdv-list.component';
import { UpdateRdvComponent } from './../components/rdv/update-rdv/update-rdv.component';
import { CreateRdvComponent } from './../components/rdv/create-rdv/create-rdv.component';
import { ConsultationListComponent } from './../components/consultation/consultation-list/consultation-list.component';
import { UpdateConsultationComponent } from './../components/consultation/update-consultation/update-consultation.component';
import { CreateConsultationComponent } from './../components/consultation/create-consultation/create-consultation.component';
import { HomeComponent } from './../components/home/home.component';
import { RegisterComponent } from './../components/register/register.component';
import { LogInComponent } from './../components/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from '../components/patients/create-patient/create-patient.component';
import { PatientDetailsComponent } from '../components/patients/patient-details/patient-details.component';
import { PatientListComponent } from '../components/patients/patient-list/patient-list.component';
import { UpdatePatientComponent } from '../components/patients/update-patient/update-patient.component';
import { CreateFactureComponent } from '../components/factures/create-facture/create-facture.component';
import { FactureDetailsComponent } from '../components/factures/facture-details/facture-details.component';
import { FactureListComponent } from '../components/factures/facture-list/facture-list.component';
import { UpdateFactureComponent } from '../components/factures/update-facture/update-facture.component';

const routes: Routes = [
  {path: 'patients', component: PatientListComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'patient-details/:id', component: PatientDetailsComponent},
  {path: 'patient-list', component: PatientListComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-consultation', component: CreateConsultationComponent},
  {path: 'update-consultation/:id', component: UpdateConsultationComponent},
  {path: 'consultation-list', component: ConsultationListComponent},
  {path: 'create-rdv', component: CreateRdvComponent},
  // {path: 'create-rdv/:id', component: CreateRdvComponent},
  {path: 'update-rdv/:id', component: UpdateRdvComponent},
  {path: 'rdv-list', component: RdvListComponent},
  {path: 'rdv', component: RdvListComponent},
  {path: 'rdv-details/:id', component: RdvDetailsComponent},
  {path: 'list-patient-rdv', component: ListPatientRdvComponent},
  {path: 'create-facture', component: CreateFactureComponent},
  {path: 'update-facture/:id', component: UpdateFactureComponent},
  {path: 'facture-list', component: FactureListComponent},
  {path: 'factures', component: FactureListComponent},
  {path: 'facture-details/:id', component: FactureDetailsComponent},
  {path: 'info-clinic', component: InfoClinicComponent},
  {path: 'info-clinic/:id', component: UpdateInfoClinicComponent},

];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
