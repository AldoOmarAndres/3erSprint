import fsPromises from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {

  const dataFilePath = path.join(process.cwd(), `public/bankaccounts.json`)

  //ESTO SIRVE PARA INGRESAR DINERO

  if (req.method === 'POST') {
    try {
      
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      const {monto, cuentaDestino, id1} = req.body;
      
      objectData.filter(c => {c.idU === id1})[0].balance -= monto;
      objectData.filter(c => {c.numberAccount === cuentaDestino})[0].balance += monto;

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      // Send an error response
      res.status(500).json({ message: 'Error storing data' });
    }
  }

}
