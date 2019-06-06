import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../errorhandler/not-found';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private getPersonsUrl = 'http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons';
  private getPersonsFirstNameUrl = 'http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons/firstname';
  private getPersonsLastNameUrl = 'http://mytest-env.gk2ensxugp.us-east-2.elasticbeanstalk.com/api/persons/lastname';
  constructor(private http: Http) { }

  getPersons() {
    return this.http.get(this.getPersonsUrl);
  }

  getPersonsByFirstName(firstName: string) {
    return this.http.get(this.getPersonsFirstNameUrl + '/' + firstName)
      .pipe(
        catchError(
          (error: Response) => {
            if (error.status === 404) {
              alert('Not Found');
              return throwError(new NotFoundError());
            }
          }
        )
      );
  }
  getPersonsByLastName(lastName: string) {
    return this.http.get(this.getPersonsLastNameUrl + '/' + lastName)
      .pipe(
        catchError(
          (error: Response) => {
            if (error.status === 404) {
              alert('Not Found');
              return throwError(new NotFoundError());
            }
          }
        )
      );
  }

}
