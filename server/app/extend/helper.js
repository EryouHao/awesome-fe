'use strict';
const qiniu = require('qiniu');

exports.qnUpload = options => {
  const { accessKey, secretKey, bucket } = options;
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  const putPolicy = new qiniu.rs.PutPolicy({ scope: bucket });
  const uploadToken = putPolicy.uploadToken(mac);

  const config = new qiniu.conf.Config();

  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();

  return (readableStream, key) => {
    return new Promise(function(resolve, reject) {
      formUploader.putStream(uploadToken, key, readableStream, putExtra, function(respErr, respBody, respInfo) {
        if (respErr) {
          reject(respErr);
        }
        if (respInfo.statusCode === 200) {
          resolve(respBody);
        }
      });
    });
  };
};
