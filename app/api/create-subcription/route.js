// app/create-subscription/route.js

import crypto from 'crypto';
import querystring from 'querystring';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, orderId } = req.body;

    const vnp_TmnCode = process.env.VNP_TMNCODE;
    const vnp_HashSecret = process.env.VNP_HASHSECRET;
    const vnp_Url = process.env.VNP_URL;
    const vnp_ReturnUrl = process.env.VNP_RETURNURL;

    const ipAddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const date = new Date();
    const createDate = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}${('0' + date.getHours()).slice(-2)}${('0' + date.getMinutes()).slice(-2)}${('0' + date.getSeconds()).slice(-2)}`;
    const orderInfo = `Payment for order #${orderId}`;

    const orderParams = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode,
      vnp_Amount: amount * 100, // Convert to VND
      vnp_CurrCode: 'VND',
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderInfo,
      vnp_Locale: 'vn',
      vnp_ReturnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    const sortedParams = sortObject(orderParams);

    const signData = querystring.stringify(sortedParams);
    const hmac = crypto.createHmac('sha512', vnp_HashSecret);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    sortedParams.vnp_SecureHash = signed;
    const paymentUrl = `${vnp_Url}?${querystring.stringify(sortedParams)}`;

    res.status(200).json({ paymentUrl });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();

  keys.forEach(key => {
    sorted[key] = obj[key];
  });

  return sorted;
}
