import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    isLogged,
    login,
    register,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    get isLogged () { return currentUserSubject.value }
};

function isLogged(){
    return currentUserSubject.value;
}

function login(username, password) {
    return fetch(`api/v1/login`, {
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
        .then(handleResponse)
        .then(user => {
            if(user){
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
            }
        });
}

function register(username, password){
    return fetch(`/register`, {
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

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}