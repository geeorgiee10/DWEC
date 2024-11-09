//a)
function CrearCookie(identificador, valor, fechaExpiracion) {
    let cookie = `${identificador}=${valor};`;
    
    if (fechaExpiracion) {
        cookie += `expires=${fechaExpiracion.toUTCString()};`;
    }
    
    document.cookie = cookie;
}

//b)
function LeerCookie(identificador) {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        
        if (cookie.startsWith(identificador + '=')) {
            return cookie.substring(identificador.length + 1);
        }
    }
    
    return null;
}

//c)
function BorrarCookie(identificador) {
    const fechaExpiracion = new Date(0);
    
    document.cookie = `${identificador}=;expires=${fechaExpiracion.toUTCString()};path=/`;
}
