var JSONBig = (function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
});

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = JSONBig;
} else {
    window.Validator = JSONBig;
}
