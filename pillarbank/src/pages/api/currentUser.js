//import fsPromises from 'fs/promises';



const path = (process.cwd() + `/public/usuarios.json`)

export async function validarCredenciales(usuario, contraseña) {

  //const jsonData = await fsPromises.readFile(path);
  const usersData = JSON.parse(jsonData);

  const usuarioValido = usersData.find((user) => user.usuario === usuario && user.password === contraseña);
  return usuarioValido;
}

const usuarioAlmacenado = sessionStorage.getItem('usuario');
const usuario = usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;

if (!usuario) {
  router.push('/login');
}