
/*
 * Copyright 2017-present Open Networking Foundation

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const httpProxy = require('http-proxy');

const target = process.env.PROXY || '127.0.0.1:8080';

console.info(`Proxying request to: ${target}`);

const proxy = httpProxy.createProxyServer({
  target: `http://${target}`
});

proxy.on('error', function(error, req, res) {
  res.writeHead(500, {'Content-Type': 'text/plain'});
  console.error('[Proxy]', error);
});

module.exports = {
  proxy
};