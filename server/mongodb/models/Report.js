import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true
  },
  date_of_creation: {
    type: String,
    required: true,
  },
  quarter: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Report ?? mongoose.model("Report", ReportSchema);
