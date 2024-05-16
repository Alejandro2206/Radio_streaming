const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://tu-proyecto-firebase.firebaseio.com', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
