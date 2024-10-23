function imprimirCuadradoPalabra(palabra) {
    const tamaño = palabra.length;
  
    for (let i = 0; i < tamaño; i++) {
      let linea = '';
  
      for (let j = 0; j < tamaño; j++) {
        if (i === 0) {
          linea = linea + palabra[j] + ' ';
        } 
        else if (i === tamaño - 1) {
          linea = linea + palabra[tamaño - j - 1] + ' ';
        } 
        else if (j === 0) {
          linea = linea + palabra[i] + ' ';
        } 
        else if (j === tamaño - 1) {
          linea = linea + palabra[tamaño - i - 1] + ' ';
        } 
        else {
          linea = linea + '  ';
        }
      }
      console.log(linea.trim()); 
    }
  }
  
  const palabra = prompt("Dime la palabra");
  imprimirCuadradoPalabra(palabra);
