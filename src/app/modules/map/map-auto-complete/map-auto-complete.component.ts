import { MatFormFieldModule } from '@angular/material/form-field';
import { Location } from "@angular-material-extensions/google-maps-autocomplete";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatGoogleMapsAutocompleteDirective } from '@angular-material-extensions/google-maps-autocomplete';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';




@Component({
  selector: 'app-map-auto-complete',
  standalone: true,
  imports: [MatFormFieldModule , FormsModule , ReactiveFormsModule , MatGoogleMapsAutocompleteModule ],
  templateUrl: './map-auto-complete.component.html',
  styleUrl: './map-auto-complete.component.scss'
})
export class MapAutoCompleteComponent {
  @ViewChild(MatGoogleMapsAutocompleteDirective) autocompleteDirective: MatGoogleMapsAutocompleteDirective | undefined;

  companyaddress = new FormControl('')

  constructor(private cd:ChangeDetectorRef){

  }


  ngAfterViewInit() {
    if (this.autocompleteDirective) {
      const autocomplete:any = this.autocompleteDirective.autocomplete;
      autocomplete.setComponentRestrictions({
        country: ['us', 'pr', 'ca']
      });
    }
  }
 // Setting country restrictions
 autocompleteOptions: google.maps.places.AutocompleteOptions = {
  componentRestrictions: {
    country: ['us', 'pr', 'ca'] // USA, Puerto Rico, Canada
  }
};






  onAutocompleteSelected(result: any): void {
    this.latLng = null; /**latLng not update proprely when we change address */
    let postalcode: string;
    let city: string;
    let state: string;
    let country: string;
    let fullAddress;
    fullAddress = result.formatted_address;
    for (let i = 0; i < result.address_components.length; i++) {
      for (let j = 0; j < result.address_components[i].types.length; j++) {
        if (result.address_components[i].types[j] == "postal_code") {
          postalcode = result.address_components[i].long_name;
        } else if (result.address_components[i].types[j] == "country") {
          country = result.address_components[i].long_name;
        } else if (
          result.address_components[i].types[j] == "administrative_area_level_1"
        ) {
          state = result.address_components[i].long_name;
        } else if (
          result.address_components[i].types[j] == "locality"
        ) {
          city = result.address_components[i].long_name;
        }
      }
    }
    // let address = {
    //   address: fullAddress,
    //   postalcode: postalcode,
    //   city: city,
    //   state: state,
    //   country: country,
    //   latlng: this.latLng
    // }
    this.companyaddress.setValue(fullAddress);
  }





  latLng : any;
  onLocationSelected(location:any): void {
    this.latLng = location;
    console.log(this.latLng)
    this.cd.detectChanges(); // Trigger change detection
  }


  
  isAddressFieldEmpty(event:any){
    if(event.target.value.length == 0){
      // this.googleAddress.emit({ 'address': ' ', 'shipping': false });
    }
  }





}

