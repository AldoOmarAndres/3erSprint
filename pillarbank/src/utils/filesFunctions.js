const URL = "http://localhost:3000/";


export async function fetchUserData(userId, file) {
  
  // Lee el contenido del archivo JSON
  try {
    const data = await fetch(`${URL}${file}.json`).then((r) => r.json())
    if (data) {
      
      return data.filter((d) => d.idU === userId);

    }
  } catch (error) {
    // Manejo de errores, puedes registrarlos o devolver un objeto de error personalizado
    throw error;
  }
}

export async function fetchTransferenciasData(userId, file) {
  
  // Lee el contenido del archivo JSON
  try {
    const data = await fetch(`${URL}${file}.json`).then((r) => r.json())
    if (data) {
      //FILTRO POR DISTINTO
      return data.filter((d) => d.idU !== userId);

    }
  } catch (error) {
    // Manejo de errores, puedes registrarlos o devolver un objeto de error personalizado
    throw error;
  }
}

export async function validarCredenciales(usuario, contraseña) {
  console.log(usuario, contraseña)

  //const jsonData = await fsPromises.readFile(path);
  try {
    const data = await fetch(`${URL}usuarios.json`).then((r) => r.json())
    if (data) {
      const usuarioValido = data.find((user) => user.usuario === usuario && user.password === contraseña);
      return usuarioValido;

    }
  } catch (error) {
    // Manejo de errores, puedes registrarlos o devolver un objeto de error personalizado
    throw error;
  }
}