import axios from "axios";

export default async function nomics(req, res) {
  const {
    query: { currency },
  } = req;

  const nomicsAPIKey = process.env.NOMICS_API;

  const url = `https://api.nomics.com/v1/currencies/ticker?key=${nomicsAPIKey}&ids=${currency}&convert=BTC`;
  const response = await axios.get(url);
  res.status(200).json({
    price: response.data[0].price,
  });
}
