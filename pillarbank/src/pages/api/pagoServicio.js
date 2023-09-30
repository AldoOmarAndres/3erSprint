import fsPromises from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {

  const dataFilePath = path.join(process.cwd(), `public/serviciosUser.json`)

  if (req.method === 'POST') {
    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      const {name, price, idU} = req.body;
      console.log(name, price)
      const o = {name: name, price: price}
      console.log(objectData.filter(c => c.idU === idU ).map(c=>c.servicios.find(s => s.name === name && s.price === price)))
      
      objectData.filter(c => c.idU === idU ).map(c=>c.servicios.find(s => s.name === name && s.price === price))[0].price = 0;

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: 'Error storing data' });
    }
  }

}
