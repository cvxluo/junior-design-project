function getBaseURL() {
  // if backend
  if (process.env.VERCEL_URL) {
    return `https://${process.env.NEXTAUTH_URL}`;
  }
  return "http://localhost:3000";
}

export default {
  baseUrl: getBaseURL(),
  api: {
    reports: {
      create: "/api/reports/create",
      get: "/api/reports/get",
      update: "/api/reports/update",
      delete: "/api/reports/delete",
    },
    user: {
      signUp: "/api/user/signUp",
    },
  },
};
