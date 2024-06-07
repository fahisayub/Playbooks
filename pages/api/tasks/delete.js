import dbConnect from '../../../utils/dbConnect';
import Task from '../../../models/Task';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'DELETE':
      try {
        const { id } = req.query;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
          return res.status(404).json({ success: false, error: 'Task not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, error: 'Method not allowed' });
      break;
  }
};
