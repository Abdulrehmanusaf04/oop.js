let DATA = "secret Information";

class User{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log("Data=",DATA);
    }
}

class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("Something New");    
    }

}

let student = new User("Ahmed","aryousaf@gmail");
let teacher = new User("Ali","ali@org");

let admin1= new admin("Admin","Admim@rise1");