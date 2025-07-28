export const setCookie = (name, value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            const cookieValue = decodeURIComponent(c.substring(nameEQ.length, c.length));

            try {
                return JSON.parse(cookieValue);
            } catch (e) {
                return cookieValue;
            }
        }
    }
    return null;
}

export const deleteCookie = (name) => {
    setCookie(name, "", -1); 
}

export const clearAllCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach(cookie => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });
}
