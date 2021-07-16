const fecthApi = () => {
  return fetch("https://api.adderou.cl/tyaas/").then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

export default fecthApi;
