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
      create: "/api/Reports/create",
      get: "/api/Reports/get",
      update: "/api/Reports/update",
      delete: "/api/Reports/delete",
    },
    user: {
      signUp: "/Auth/signUp",
    },
  },
};
