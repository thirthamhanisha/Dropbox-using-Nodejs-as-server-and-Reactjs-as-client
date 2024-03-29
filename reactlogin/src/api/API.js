const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'


const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/doLogin`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
    
    
    export const doGetUser = (payload) =>
    fetch(`${api}/users/doGetUser`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
    		
    
        .catch(error => {
            console.log("This is error");
            return error;
        });
         
 /*   export const doGetUser = (uname) =>
    axios.post(api + '/users/doGetUser', {uname:uname})
    .then(res => {
    	if(res.data.length!==0)
    		{
    		var array = res.data.split(',');
    		array.length = array.length-1;
    		console.log(array);
    		return array;
    		}
    })
    .catch(error => {
            console.log("This is error");
            return error;
        });
    		*/
export const doSignup = (payload) =>
    fetch(`${api}/users/doSignup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
    
    export const doShare = (payload) =>
    fetch(`${api}/users/doShare`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
    
 export const getImages = () =>
    fetch(`${api}/files/`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });
    
    export const getFiles = (payload) =>
    fetch(`${api}/files/doGetUser`, {
    	 body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const uploadFile = (payload) =>
    fetch(`${api}/files/upload`, {
        method: 'POST',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
            console.log("This is error");
            return error;
        });
