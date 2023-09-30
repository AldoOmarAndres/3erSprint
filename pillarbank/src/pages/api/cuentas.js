import fsPromises from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {

  const dataFilePath = path.join(process.cwd(), `public/bankaccounts.json`)

  

  if (req.method === 'POST') {
    try {
      
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);


      const v = req.body;

      objectData.find(c => c.idU == v.id1).balance -= Number(v.monto);
      objectData.find(c => c.numberAccount == v.cuentaDestino).balance += Number(v.monto);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      // Send an error response
      console.log(error)
      res.status(500).json({ message: 'Error storing data' });
    }
  }

}
