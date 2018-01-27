import axios from 'axios'
import {AsyncStorage} from 'React'

import { appAuthToken } from './storage'

export const API_ROOT_URL = 'https://xxxxx/api/'


const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}


export class Api {

	constructor() {
	  this.instance = axios.create({
		    baseURL: API_ROOT_URL,
		    timeout: 10000,
		    withCredentials: true,
		    headers: HEADERS,
		})

	  // if(token){
	  // 	this.instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
	  // }

	}

	patch(url, payload = {} ){
		return appAuthToken.getSessionToken()
			.then((token) => {
		        if(token)
		        	this.instance.defaults.headers.common['Authorization'] = "Token "+token;
		        return this.instance.patch(url, payload)
		     })
	}

	post(url, payload = {} ){
		return appAuthToken.getSessionToken()
			.then((token) => {
		        if(token)
		        	this.instance.defaults.headers.common['Authorization'] = "Token "+token;
		        if(!token)
		        {
		        	delete this.instance.defaults.headers.common['Authorization']
		        }

		        return this.instance.post(url, payload)
		     })
	}

	delete(url){
		return appAuthToken.getSessionToken()
			.then((token) => {
		        if(token)
		        	this.instance.defaults.headers.common['Authorization'] = "Token "+token;
		        return this.instance.delete(url)
		     })
	}

	get(url){
		return appAuthToken.getSessionToken()
			.then((token) => {
				headers={
					'Accept': 'application/json',
    				'Content-Type': 'application/json'
				}
		        if(token){
		        	// this.instance.defaults.headers.common['Authorization'] = "JWT "+token;
		        	headers['Authorization']= "Token "+token
		        }

		        return axios.get(API_ROOT_URL+url, {
			      headers: { ...headers }
			    })

		     //    return this.instance.get(url, {
			    //   headers: { "Authorization": "JWT "+token }
			    // })

		     })
	}
}

export let api = new Api()