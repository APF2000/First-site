let db = [{username: 'arthurpfonseca@gmail.com', psswd: 'senha1234'}];

function user_exists(username, psswd)
{

    const filter = db.filter((user) => {
        let result = user.username == username;
        result = result && (user.psswd == psswd);
        return result;
    });

    return (filter.length == 1);
}

function alert_invalid()
{
    console.log('Invalid email or password');
}

function suggest_sign_up()
{
    console.log("Dont't have an account yet? Register!");
}

function submit()
{
    const username = document.querySelector('#email').value;
    const psswd = document.querySelector('#psswd').value;

    if(!user_exists(username, psswd))
    {
        alert_invalid();
        suggest_sign_up();
    }
}