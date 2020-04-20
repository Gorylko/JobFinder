import { handleResponse } from '../helpers/handle-response';

export const itemService = {

}

function save(item){
    return fetch(`api/v1/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            'username': username, 
            'password' : password 
        })
    })
    .then(response => {
        return response.ok;
    });
}

