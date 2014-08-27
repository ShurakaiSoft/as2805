/**
 * Module for AS2805 to JavaScript translation
 */

 module.exports = {
 	/**
 	 *
 	 */
 	getN: function (buffer, options, result) {
 		var bytes, extraNibble;

 		extraNibble = options.size % 2;
		bytes = (options.size + extraNibble) / 2;
 		result[options.name] = buffer.slice(0, bytes).toString('hex').slice(0, options.size);
 		return bytes;
 	}
 }