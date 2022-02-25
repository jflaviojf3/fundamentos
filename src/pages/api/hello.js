// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{ name: 'J Lima', email: 'jlima@gmail.com' }, {name: 'M Heriberto', email: 'msousa@gmail.com'}])
}

