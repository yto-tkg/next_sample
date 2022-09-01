// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//type Data = {
//  name: string
//}

type HelloResponse = {
  name: string
}

//export default function handler(
//  req: NextApiRequest,
//  res: NextApiResponse<Data>
//) {
//  res.status(200).json({ name: 'John Doe' })
//}

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'John Doe' })
}

