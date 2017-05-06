import crypto from 'crypto'

module.exports = Signature

function Signature (options) {
  if (!(this instanceof Signature)) {
    return new Signature(options)
  }
}

var proto = Signature.prototype

proto._getSignature = function _getSignature (method, params, key) {
  var that = this
  var canoQuery = Object.keys(params).sort().map(function (key) {
    return that._escape(key) + '=' + that._escape(params[key])
  }).join('&')

  var stringToSign =
      method.toUpperCase() +
      '&' + this._escape('/') +
      '&' + this._escape(canoQuery)

  // console.log('string to sign: %s', stringToSign)

  var signature = crypto.createHmac('sha1', key + '&')
  signature = signature.update(stringToSign).digest('base64')

  // console.log('signature: %s', signature)

  return signature
}

/**
 * Since `encodeURIComponent` doesn't encode '*', which causes
 * 'SignatureDoesNotMatch'. We need do it ourselves.
 */
proto._escape = function _escape (str) {
  return encodeURIComponent(str).replace(/\*/g, '%2A')
}
