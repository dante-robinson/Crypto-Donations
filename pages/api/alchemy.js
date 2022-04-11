export default async function alchemy(req, res) {
  const alchemyAPIKey = process.env.ALCHEMY_API;

  const url = `https://polygon-mumbai.g.alchemy.com/v2/${alchemyAPIKey}`;

  // API Key is exposed in the response no matter what
  res.status(200).json({
    url: url,
  });
}
