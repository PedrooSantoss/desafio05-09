function sendMsg(msg, typeMsg){
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = ''

    const msgDisplay = '';

    <p class="${typeMsg}">{msg}</p>

    msgDiv.innerHTML = msgDisplay;

    setTimeout(function() {
        msgDiv.innerHTML = '';
    }, 5000
    )
}

function tell(){
    let name = document.getElementById("name").value;
    let telFixo= document.getElementById("telFixo").value;
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
 class tellList{
    constructor(){
        addTell(tell){
            if (getinputs()){
                sendMsg("preencha todos os campos", "error")
            }else{
                sendMsg("Telefone cadastrado", "succes")
                this.tellList.push(tell)
                render()
                cleanInput()
            }
        }
    }
 }