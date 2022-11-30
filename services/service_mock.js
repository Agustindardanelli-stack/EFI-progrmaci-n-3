// async function login(email, password) {
//     return { user: { name: email }, accessToken: '123456789', password: password }
// }

import validUsersMock from '../mocks/mock_user';
import validMateriasMock from '../mocks/mock_materias';

async function login(credential) {
    try {
        const loged = validUsersMock.find(user => user.email == credential.email && user.password == credential.password )
        if (loged) {
            return credential.email ;
        } else {
            alert("Los datos ingresados son incorrectos")
            return ''
        }
    } catch(e){
        return e;
    }
}

async function materias() {

    try {
        return validMateriasMock;
    } catch(e) {
        console.log(e)
    }
}

export const serviceMock = {
    login,
    materias
}