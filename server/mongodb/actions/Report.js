import mongoDB from "../index";
import ReportSchema from "../models/Report";

export async function createReport(reportData) {
  await mongoDB();

  console.log("Creating report...");

  console.log(reportData);
  const report = await ReportSchema.create(reportData);

  return report;
}
