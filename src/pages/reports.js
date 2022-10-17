import Reports from "../screens/Reports";
import { getUserReports } from "server/mongodb/actions/Report";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const reports = await getUserReports(session.email);
  return {
    props: {
      cards: JSON.parse(JSON.stringify(reports)),
    },
  };
}

const ReportsWrapper = (props) => <Reports {...props} />;

export default ReportsWrapper;
