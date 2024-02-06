'Use strict'
class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email
    }
    login(username,password){
        //validar usuario y contrasena
        if (username == this.username && password==this.password) {
            alert('Welcome'
            )
        }
        else {
            alert('OOOps!! Usuario o contraseña incorrecto')
        }

    }
    
    resetPassword(newPassword){
        this.password=newPassword;
    }

    updateInfo(newEmail){
        this.email=newEmail
    }

    showInfo(){
        alert(`Usuario ${this.username} ${this.email}`)
    }
}

//Instanciar : crear un objeto a partir de la clase.

let user =new User('gpnq','1234','gpnovillo@sudamericano.edu.ec');
user.login('gpnq','admin');
user.resetPassword('admin1234');
user.login('gpnq','admin1234')