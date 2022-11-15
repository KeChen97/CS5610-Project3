//Ke Chen
const API = {
    login: async(input) => {
        try{
            const res = await fetch('/login/password', {
                method: 'post',
                body: JSON.stringify(input),
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            const loginRes = await res.json();
            return loginRes;
        } catch (e) {
            console.log(e);
        }
    },

    register: async(input) => {
        try{
            const res = await fetch('/register', {
                method: 'post',
                body: JSON.stringify(input),
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            const registerRes = await res.json();
            return registerRes;
        } catch (e) {
            console.log(e);
        }
    },

    getUser: async () => {
        try{
            const res = await fetch('/getUser', {
                method: 'get',
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            const userInfo = await res.json();
            return userInfo;
        } catch (e) {
            console.log(e);
        }
    },

    getCourses: async() => {
        try {
            const res = await fetch ('/getCourses', {
                method:'get',
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
}



export default API;