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

function create_element(tag_name, text, attributes)
{
    attributes = attributes || {};

    let el = document.createElement(tag_name);
    el.textContent = text;
    for(attr in attributes)
    {
        let value = attributes[attr];
        el.setAttribute(attr, value);
    }

    return el;
}

function alert_invalid()
{
    let msg = 'Invalid email or password';
    let el = create_element('a', msg, {id: 'alert_invalid'});

    document.querySelector('#login_form').appendChild(el);
}

function suggest_sign_up()
{
    let msg = "Dont't have an account yet? Register!";
    let el = create_element('span', msg, {href: 'test'});

    document.querySelector('#login_form').appendChild(el);
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