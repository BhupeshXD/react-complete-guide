class Human{
    constructor(){
        this.gender='male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name = "bhupesh";
        this.gender='female';
    }
    printMyname(){
        console.log(this.name);
    }
}
const p = new Person();
const h = new Human();
p.printMyname();
p.printGender();
h.printGender(); 