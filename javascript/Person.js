class Person{
  company = "Google";  

 printCompany = () => {
   console.log(this.company);
 }
}


class Employee extends Person{
  departName = "Human Resource";
  company = "new Google";

  
 printEmployeeDetails = () => {
   console.log(this.company + this.departName); 
 }
}
employee = new Employee();
employee.printEmployeeDetails();
