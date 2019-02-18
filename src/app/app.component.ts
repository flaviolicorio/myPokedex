import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokédex';

  formPokedex: FormGroup;


  catch: any;


  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.formPokedex = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.catch = JSON.parse(localStorage.catch);  
    console.log(this.catch);
  }

  getPoke() {
    let aux = [];
    this.apiService.getPoke(this.formPokedex.value.name).subscribe((data: Object) => {
      let datetime = new Date;
      for (let log = 0; log < data['abilities'].lenght; log++) {
        let name = data['abilities'];
      }
      if (localStorage.getItem("catch") != null) {
        aux = JSON.parse(localStorage.getItem("catch"));
      }
      aux.push({
        'id': data['id'],
        'date': datetime.toLocaleString('pt-BR'),
        'name': data['name'],
        'abilities': data['abilities'],
        'moves': data['moves']
      });
      this.catch = JSON.stringify(aux);
      localStorage.setItem("catch", this.catch);
      this.catch = JSON.parse(localStorage.catch);
    }, error => {
      console.log('Error: ', error);
    });
  }
}
