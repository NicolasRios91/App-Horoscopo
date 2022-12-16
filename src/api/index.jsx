import { SIGNS } from "../utils/constants";

const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "bf21ad14c8mshdb2722755f9d56bp1f8b7bjsn52f582d6647b",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

export const fetchSign = async (sign) => {
  const { signImage, signName } = SIGNS.find((e) => e.signName === sign);
  const response = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
    options
  );
  const parsedResponse = await response.json();
  return { signName, signImage, ...parsedResponse };
};

export const fetchAllSigns = async () => {
  const response = await Promise.all(SIGNS.map((e) => fetchSign(e.signName)));
  return response;
};
