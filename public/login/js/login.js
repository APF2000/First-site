let db = [{username: 'arthurpfonseca@gmail.com', psswd: 'senha1234'}];
//console.log("Arquivo login.js");

function user_exists(username, psswd)
{
    //console.log('Usuario existe?');

    const filter = db.filter((user) => {
        let result = user.username == username;
        result = result && (user.psswd == psswd);
        return result;
    });

    /*console.log(`expected: ${db[0].username}, ${db[0].psswd}`);
    console.log('user:');
    console.log(username);

    console.log('psswd:');
    console.log(psswd);

    console.log(filter);*/

    return (filter.length == 1);
}

function alert_invalid()
{
    console.log('Email ou senha inválidos');
}

function suggest_sign_up()
{
    console.log('Não tem uma conta? Registre-se!');
}

function submit()
{
    //console.log('submiting');
    const username = document.querySelector('#email').value;
    const psswd = document.querySelector('#psswd').value;

    if(!user_exists(username, psswd))
    {
        alert_invalid();
        suggest_sign_up();
    }
}

//function submit(){console.log('submiting');const username = document.getElementById('username');const psswd = document.getElementById('psswd');if(!user_exists(username, psswd)){alert_invalid();suggest_sign_up();}}