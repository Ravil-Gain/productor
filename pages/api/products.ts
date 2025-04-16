// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../public/products.json";
import { scrapeMenu } from "../../src/scrapeMenu";

const { products } = data;
const autocorrect = require("autocorrect")({ words: products });
type Data = [string];

const find = (s: string) => {
  const result: string[] = [];
  const matches = products.filter((w) => w.toLowerCase().includes(s));
  matches.map((match) => result.push(match));
  if (matches.length < 3) {
    const auto = autocorrect(s);
    if (!result.includes(auto)) result.push(auto);
  }
  return result;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const data = await scrapeMenu();
  // console.log("scraped data", data);
  
  res.status(200).json(data);
}
