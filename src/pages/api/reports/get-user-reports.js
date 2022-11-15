import { getUserReports } from "server/mongodb/actions/Report";

const handler = (req, res) =>
  getUserReports(req.body)
    .then((report) => {
      res.status(200);
      res.send({
        success: true,
        payload: report,
      });
      return res;
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );

export default handler;
