function getAdmins (map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Gi", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Nat", "Admin");

console.log(getAdmins(usuarios));
