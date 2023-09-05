function getInputs() {
    let name = document.getElementById("name").value
    let telFixo = document.getElementById("telFixo").value
    let telCell = document.getElementById("telCell").value
    let urlImg = document.getElementById("urlImg").value
    let birthday = document.getElementById("birthday").value
    let emailClient = document.getElementById("emailClient").value
    let cep = document.getElementById("cep").value
    let city = document.getElementById("city").value
    let ig = document.getElementById("ig").value
    let gitHub = document.getElementById("gitHub").value
    if (name == '' || telFixo == '' || telCell == '' || urlImg == '' || birthday == '' || emailClient == '' || cep == '' || city == '' || ig == '' || gitHub == '') {
        return true;
    } else {
        return false;

    }
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}



function sendSuccessMsg(msg) {
    console.log("Passou pelo funcao sendsuccessMsg()");

    document.getElementById("approved-msg").innerHTML = msg;
    document.getElementById("approved-msg").classList.add("hidden");
    setTimeout(function () {
        document.getElementById("approved-msg").classList.remove("hidden");
    }, 4000);
}

function tell() {
    let name = document.getElementById("name").value;
    let telFixo = document.getElementById("telFixo").value;
    let telCell = document.getElementById("telCell").value;
    let urlImg = document.getElementById("urlImg").value;
    let birthday = document.getElementById("birthday").value;
    let emailClient = document.getElementById("emailClient").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let ig = document.getElementById("ig").value;
    let gitHub = document.getElementById("gitHub").value;
    const tell = new tell(name, telFixo, telCell, urlImg, birthday, emailClient, cep, city, ig, gitHub);
    listTell.addTell(tell)
}
class tellList {
    constructor() {
        addTell(tell)
        if (getinputs()) {
            sendMsg("preencha todos os campos", "error")
        } else {
            sendMsg("Telefone cadastrado", "succes")
            this.tellList.push(tell)
            render()
            cleanInput()
        }
    }
}

function cleanFields() {
    document.getElementById("name").value = "";
    document.getElementById("telFixo").value = "";
    document.getElementById("telCell").value = "";
    document.getElementById("urlImg").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("emailClient").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("ig").value = "";
    document.getElementById("gitHub").value = "";
}

function showPosts() {
    document.getElementById("tellList").classList.remove("hidden")
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
            <h2>${post.name}</h2>
            <p><strong>Telefone Fixo: </strong>${post.telFixo}</p>
            <p><strong>Telefone Celular: </strong>${post.telCell}</p>
            <p><strong>Link da Imagem: </strong>${post.urlImg}</p>
            <p><strong>Data de Nascimento: </strong>${post.birthday}</p>
            <p><strong>Email: </strong>${post.emailClient}</p>
            <p><strong>CEP: </strong>${post.cep}</p>
            <p><strong>Cidade: </strong>${post.city}</p>
            <p><strong>Instagram: </strong>${post.ig}</p>
            <p><strong>GitHub: </strong>${post.gitHub}</p>

            <button onclick="editPost(${index})">Editar</button>
            <button onclick="removePost(${index})">Excluir</button>
        </div>
        `;
        
    });

    document.getElementById("tellList").innerHTML = showContent
}

function editCtt(index) {
    const post = posts[index];

    document.getElementById("name").value = post.name;
    document.getElementById("telFixo").value = post.telFixo;
    document.getElementById("telCell").value = post.telCell;
    document.getElementById("urlImg").value = post.urlImg;
    document.getElementById("emailClient").value = post.emailClient;
    document.getElementById("cep").value = post.cep;
    document.getElementById("city").value = post.city;
    document.getElementById("ig").value = post.ig;
    document.getElementById("gitHub").value = post.gitHub;


    postIndex = index;


}

function removeCtt(index) {
    posts.splice(index, 1);
    showPosts();

    if (posts.length == 0) {
        document.getElementById("name").classList.add("hidden")
    }
}


function getZodiacSign() {
    let birthday = new Date(this.birthday);
    let day = birthday.getDate();
    let month = birthday.getMonth() + 1;
    console.log("Passou pelo getSigno() da class User");

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricórnio ♑";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquário ♒";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes ♓";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Áries ♈";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Touro ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos ♊";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Câncer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leão ♌";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgem ♍";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Escorpião ♏";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagitário ♐";
    }
}


function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

class ListUser {
    constructor() {
        this.users = []
    }
    add(user) {
        this.users.push(user);
        nameOnScreen()
    }
    remove(name) {
        this.users.filter(user => user.name != name)
    }
    buscar(name) {
        this.user.forEach(user => {
            if (user.name == name) {
                return user;
            }
        })
    }
    list(user) {
        return this.user.push;
        
    }
}


function createUser() {
    const user = document.getElementById("name").value;
    const telFixo = document.getElementById("telFixo").value;
    const telCell =document.getElementById("telCell").value;
    const urlImg = document.getElementById("urlImg").value;
    const emailClient = document.getElementById("emailClient").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const ig = document.getElementById("ig").value;
    const gitHub = document.getElementById("gitHub").value;

    const newuser = new Contato(user, telFixo, telCell, urlImg, emailClient, cep, city, ig, gitHub);
    listUsers.add(newuser);

}
const listUsers = new ListUser()

function removename(name) {

    listnames.remove(name)

    nameOnScreen();
}

function nameOnScreen() {
    const listUser = document.getElementById("listUsers");
    listUser.innerHTML = "";

    listUsers.users.forEach(user => {
        const cardDiv = `
            <div class="card">
                <img src="${user.imagem}" alt="${user.urlImg}">
                <h2>${user.name}</h2>
                <p>Telefone Fixo R$${user.telFixo}</p>
                <p>Telefone Celular: ${user.telCell}</p>
                <p>Link da Imagem: ${user.urlImg}</p>
                <p>Email: ${user.emailClient}</p>
                <p>CEP: ${user.cep}</p>
                <p>Cidade: ${user.city}</p>
                <p>Instagram: ${user.ig}</p>
                <p>Git Hub: ${user.gitHub}</p>
            </div>
        `;

        listUser.innerHTML += cardDiv;
    });
}

class Contato {
    constructor(name, telFixo, telCell, urlImg, emailClient, cep, city, ig, gitHub){
        this.name = name
        this.telFixo = telFixo
        this.telCell = telCell
        this.urlImg = urlImg
        this.emailClient = emailClient
        this.cep = cep
        this.city = city
        this.ig = ig
        this.gitHub = gitHub
    }
}
console.log(name)