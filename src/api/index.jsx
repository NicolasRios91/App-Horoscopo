import { signs } from "../utils/images/constants";

const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "bf21ad14c8mshdb2722755f9d56bp1f8b7bjsn52f582d6647b",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

export const fetchSign = async (sign) => {
  const response = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
    options
  );
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const fetchAllSigns = async () => {
  let allSigns = [];
  (async function () {
    signs.forEach(async (sign) => {
      const dataResponse = await fetchSign(sign);
      const editedResponse = { sign: sign, ...dataResponse };
      allSigns.push(editedResponse);
    });
  })();
  return allSigns;
};
