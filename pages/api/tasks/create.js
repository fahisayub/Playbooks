import dbConnect from '../../../utils/dbConnect';
import Task from '../../../models/Task';

export default async (req, res) => {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, error: 'Method not allowed' });
      break;
  }
};
