import { UserNotExists } from '../../auth/AuthActions'
import { SubmissionError } from 'redux-form';


export const minLength = (min) => {
    return (value) => {
        return value && value.length < min ? `${min} caractères minimum` : undefined
    }
}

export const isEmail = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Adresse e-mail invalide' : undefined
}

export const isRequired = (value) => {
    return value ? undefined : 'Obligatoire'
}

export const asyncValidateUserNotExists = (values, dispatch) => {

    return dispatch(UserNotExists(values))
        // .then((response) => {
        //     return true
        // }) 
        .catch((error) => {
        	fields = error.response.data.field
        	msg = []
        	for (var i in fields) {  
			  msg[fields[i]] = "no disponible"
			}
            throw new {username: 'Bad Login'}
        })
}
