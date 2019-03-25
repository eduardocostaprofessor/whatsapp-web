const URL_TO_FETCH = 'http://localhost:5000/usuarios'


window.onload = function () {

    fetch(URL_TO_FETCH

    ).then(function (response) {
        return response.json();

    }).then(function (json) {
        // console.log(json);
        templateUsuarios(json)

    }).catch(function (err) {
        console.error(err);
    });
}


function templateUsuarios(_usuarios) {
    
    let template = "<ul>";
    for (let i = 0; i < _usuarios.length; i++) {
        template += `<li>
                        <div class="mensagem-foto">
                            <img src="image/svg/man${i}.svg" alt="foto">
                        </div>
                        <div class="mensagem-usuario">
                            <div>
                                    <h4>${_usuarios[i].nome}</h4>
                            </div>
                            <div class="msg-hora">
                                10:58
                            </div>
                    
                        </div>
                    </li>`
    }

    template += "</ul>"
    document.getElementById('lista-usuarios').innerHTML = template
}

function logar() {

    event.preventDefault();
    let usuario = document.getElementById('login').value

    // fetch(URL_TO_FETCH, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: JSON.stringify({ nome: usuario })
    // }

    // ).then(function (response) {
    //     return response.json();

    // }).then(function (json) {
    //     console.log(json);


    // }).catch(function (err) {
    //     console.error(err);
    // });

    document.getElementsByClassName("login-box")[0].style.display = "none";

    return false;
}