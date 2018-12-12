import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  pessoa:Pessoa[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getConta();
  }

  getConta(){
    let url = 'http://localhost:8080/pessoa';

    this.http.get(url).subscribe((data:Pessoa[]) => {
      this.pessoa = data;
    });
  }

}
