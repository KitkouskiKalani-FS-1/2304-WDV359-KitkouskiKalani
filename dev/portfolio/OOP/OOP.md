
# Portfolio 

## Utilizing Object Oriented Programming (OOP)
This code snippet shows me utilizing OOP to create an employee class with options for both full time and part time subclasses.

```Javascript
class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class PartTime extends Employee{
    constructor(name, age, hours, payRate){
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Part Time";
        this.hours = hours;
        this.annualSalary = this.calculatePay();
    }
    calculatePay(){
        return this.payRate*this.hours*52;
    }
}

class FullTime extends Employee{
    constructor(name, age, payRate){
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Full Time";
        this.hours = 40;
        this.annualSalary = this.calculatePay();
    }
    calculatePay(){
        return this.payRate*40*52-1000;
    }
}
```