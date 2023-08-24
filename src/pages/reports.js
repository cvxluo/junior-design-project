import Reports from "../app/Reports/page";
import { getUserReports } from "server/mongodb/actions/Report";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  const reports = await getUserReports(session.user.email);

  return {
    props: {
      reports: JSON.parse(JSON.stringify(reports)),
    },
  };
}

const ReportsWrapper = (props) => <Reports {...props} />;

export default ReportsWrapper;
