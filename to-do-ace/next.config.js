/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  env: {
    REACT_APP_SERVERURL: process.env.REACT_APP_SERVERURL,
  },
};

module.exports = nextConfig;
