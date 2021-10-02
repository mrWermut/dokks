
export class UserDetails {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(lastName: string, firstName: string, middleName: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

}
