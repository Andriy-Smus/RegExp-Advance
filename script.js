let f1 = document.forms.f1;
const getS = selector => document.querySelector(selector);
let num = 0;

let loginRegExp = /^[A-Za-z]{4,16}$/;
let passwordRegExp = /^[\w-_.]{4,16}$/;
let emailRegExp1 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.com$/;
let emailRegExp2 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.net$/;
let emailRegExp3 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.ua$/;
let emailRegExp4 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.mail$/;


getS('.bt-add-user').onclick = function addUser(){
    if(loginRegExp.test(f1.login.value) && passwordRegExp.test(f1.password.value)){
        if(emailRegExp1.test(f1.email.value) || emailRegExp2.test(f1.email.value) || emailRegExp3.test(f1.email.value) || emailRegExp4.test(f1.email.value)) {
            num += 1;
            let log = f1.login.value;
            let pas = f1.password.value;
            let em = f1.email.value;
            let user = {
                num: num,
                login: log,
                password: pas,
                email: em
            }
            let arr = [num, user.login, user.password, user.email];
            f1.reset();
            function render(){
                let createUser = document.createElement("div");
                createUser.className = "user";
                createUser.id = num;
                getS('.container-2').appendChild(createUser);
                let createNum = document.createElement("p");
                createNum.className = "text-num";
                createNum.textContent = arr[0];
                document.getElementById(num).appendChild(createNum);
                let createLog = document.createElement("p");
                createLog.className = "text-login";
                createLog.textContent = arr[1];
                document.getElementById(num).appendChild(createLog);
                let createPas = document.createElement("p");
                createPas.className = "text-password";
                createPas.textContent = arr[2];
                document.getElementById(num).appendChild(createPas);
                let createEm = document.createElement("p");
                createEm.className = "text-email";
                createEm.textContent = arr[3];
                document.getElementById(num).appendChild(createEm);
                let createEdit = document.createElement("button");
                createEdit.className = "bt-edit";
                createEdit.textContent = "Edit";
                document.getElementById(num).appendChild(createEdit);
                let createDelete = document.createElement("button");
                createDelete.className = "bt-delete";
                createDelete.textContent = "Delete";
                document.getElementById(num).appendChild(createDelete);
            }
            render();
            document.getElementById(num).children[5].onclick =  function deleteUser(){
                document.getElementById(event.target.offsetParent.id).remove();
                num -= 1;
                let q = getS('.container-2').childNodes.length - 3;
                for(let i = 1; i<=q; i++){
                getS('.container-2').childNodes[i+2].childNodes[0].textContent = i;
                getS('.container-2').childNodes[i+2].id = i;
                }
            }
            document.getElementById(num).children[4].onclick =  function editUser(){
                let getPar = document.getElementById(event.target.offsetParent.id);
                f1.login.value = getPar.childNodes[1].textContent;
                f1.password.value = getPar.childNodes[2].textContent;
                f1.email.value = getPar.childNodes[3].textContent;
                getS('.bt-add-user').style.display = 'none';
                getS('.bt-edit-user').style.display = 'block';
                getS('.bt-edit-user').onclick = function saveEditUser(){
                    getPar.childNodes[1].textContent = f1.login.value;
                    getPar.childNodes[2].textContent = f1.password.value;
                    getPar.childNodes[3].textContent = f1.email.value;
                    getS('.bt-add-user').style.display = 'block';
                    getS('.bt-edit-user').style.display = 'none';
                    f1.reset();
                }
            }
            }
        }
    
}








