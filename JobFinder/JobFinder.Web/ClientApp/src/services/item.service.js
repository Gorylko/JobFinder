import { handleResponse } from '../helpers/handle-response';

export const itemService = {
    save,
    getById
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
            'Name': item.name,
            'Description': item.description,
            'Email': item.email, 
            'PhoneNumber': item.phoneNumber, 
            'Requirements': item.requirements, 
            'Benefits': item.benefits, 
            'AdditionalContacts': item.additionalContacts
        })
    })
    .then(response => {
        return response.ok;
    });
}

function getById(id){
    return fetch(`api/v1/items/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
    .then(handleResponse);
}

