//一定要注意引入的要与函数中的一致Cookies
import Cookies from 'js-cookie';

const tokenKey = 'token';

export function setToken(token) {
    return Cookies.set(tokenKey,token,{expires:30});
}

export const getToken = function() {
    return Cookies.get(tokenKey);
}

