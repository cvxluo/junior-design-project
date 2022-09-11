function getBaseURL() {
  // if backend
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // if client-side
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export default {
  baseUrl: getBaseURL(),
  pages: {
    home: "/",
    guidelines: "/guidelines",
    reports: "/reports",
    profile: "/profile",
    login: "/login",
  },
  api: {
    reports: {
      create: "/api/reports/create",
      get: "/api/reports/get",
      update: "/api/reports/update",
      delete: "/api/reports/delete",
    },
  },
};
