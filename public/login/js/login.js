let db = [{username: 'arthurpfonseca@gmail.com', psswd: 'senha1234'}];
console.log("Arquivo login.js");

function user_exists(username, psswd)
{
    console.log('Usuario existe?');

    const filter = db.filter((user) => {
        let result = user.username == username;
        result = result && (user.psswd == psswd);
        return result;
    });

    console.log(`Filtro: ${filter}`);

    return True;
}

function suggest_sign_up()
{
    console.log('Não tem uma conta? Registre-se!');
}

function submit()
{
    console.log('submiting');
    const username = document.getElementById('username');
    const psswd = document.getElementById('psswd');

    if(!user_exists(username, psswd))
    {
        alert_invalid();
        suggest_sign_up();
    }
}

//function submit(){console.log('submiting');const username = document.getElementById('username');const psswd = document.getElementById('psswd');if(!user_exists(username, psswd)){alert_invalid();suggest_sign_up();}}