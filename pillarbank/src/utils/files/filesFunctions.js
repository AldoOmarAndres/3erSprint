import fs from 'fs'

const URL = "http://localhost:3000/";

export async function escribirJson(file, data) {

  await fs.writeFile(URL + `${file}`, JSON.stringify(data));
}

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
