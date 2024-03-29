import urls from "../../utils/urls";

export const createReport = async ({
  name,
  userEmail,
  date_of_creation,
  quarter,
  year,
  data,
}) =>
  fetch(urls.baseUrl + urls.api.reports.create, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      userEmail,
      date_of_creation,
      quarter,
      year,
      data,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API");
      }
      if (!json.success) {
        throw new Error(json.message);
      }
      return json.payload;
    });

export const getReport = async ({ reportId }) =>
  fetch(urls.baseUrl + urls.api.reports.get, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/text",
    },
    body: reportId,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API");
      }
      if (!json.success) {
        throw new Error(json.message);
      }
      return json.payload;
    });

export const getUserReports = async ({ user }) =>
  fetch(urls.baseUrl + urls.api.reports.get, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/text",
    },
    body: user._id,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error("Could not connect to API");
      }
      if (!json.success) {
        throw new Error(json.message);
      }
      return json.payload;
    });
