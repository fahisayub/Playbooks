import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      // Handle GET request
      res.status(200).json({ message: 'GET request received' });
      break;
    case 'POST':
      // Handle POST request
      res.status(200).json({ message: 'POST request received' });
      break;
    case 'PUT':
      // Handle PUT request
      res.status(200).json({ message: 'PUT request received' });
      break;
    case 'PATCH':
      // Handle PATCH request
      res.status(200).json({ message: 'PATCH request received' });
      break;
    case 'DELETE':
      // Handle DELETE request
      res.status(200).json({ message: 'DELETE request received' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
