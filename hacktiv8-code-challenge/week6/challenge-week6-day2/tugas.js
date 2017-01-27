class Student {
    constructor(name,age,birthdate,gender,studentID,hobbies) {
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = hobbies;
    }

    SetName(newName) {
        this.name = newName;
    }
    
    SetAge(newAge) {
        this.age = newAge;
    }

    SetDateOfBirth(newDate) {
        this.birthdate = newDate;
    }

    SetGender(newGender) {
        if(newGender === 'Male') {
            this.gender = newGender;
        } else if(newGender === 'Female') {
            this.gender = newGender;
        } else {
            return 'Gender has to be set only between male or female!'
        }
    }

    addHobby(newHobby) {
        this.hobbies.push(newHobby);
    }

    removeHobby(oldHobby) {
        this.hobbies.splice(this.hobbies.indexOf(oldHobby), 1);
    }

    getData() {
        console.log('Name : '+this.name);
        console.log('Age : '+this.age);
        console.log('Date Of Birth : '+this.birthdate);
        console.log('Gender : '+this.gender);
        console.log('Student ID : '+this.studentID);
        console.log('Hobbies: ');
        for(var i=0;i<this.hobbies.length;i++) {
            console.log((i+1)+'. '+this.hobbies[i]);
        }
    }
}