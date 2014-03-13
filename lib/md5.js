/**
 * Return md5 hash of the given string and optional encoding,
 * defaulting to hex.
 *
 *     utils.md5('wahoo');
 *     // => "e493298061761236c96b02ea6aa8a2ad"
 *
 * @param {String} str
 * @param {String} encoding
 * @return {String}
 */
 exports = module.exports = function(str, encoding) {
	 return require('crypto')
		.createHash('md5')
		.update(str, 'utf8')
		.digest(encoding || 'hex');
 }
