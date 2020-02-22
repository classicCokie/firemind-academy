module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/landingpage": { page: "/landingpage" },
      "/impressum": { page: "/impressum" },
      "/datapolicy": { page: "/datapolicy" }
    };
  }
};
