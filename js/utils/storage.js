import nativeStore from 'react-native-simple-store'


export class AppAuthToken {
	constructor () {
    	this.SESSION_TOKEN_KEY = "accessToken"
  	}

  	storeSessionToken(token){
  		return nativeStore.save(this.SESSION_TOKEN_KEY, token)
  	}

  	getSessionToken(){
  		return nativeStore.get(this.SESSION_TOKEN_KEY)
  	}

  	deleteSessionToken(){
  		return nativeStore.delete(this.SESSION_TOKEN_KEY)
  	}

}

// export const getAccessToken = () => nativeStore.get('accessToken')
// export const setAccessToken = (token) => nativeStore.save('accessToken', token)


export let appAuthToken = new AppAuthToken()
