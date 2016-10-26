"use strict"
module.exports = function (x, y, callback) {
    try {
        if (x < 0 || y < 0) {

            throw new Error('x<0 or y<0');
        }
        else
            callback(null, {
                perimeter: function (x, y) {
                    return (2 * (x + y));
                },
                area: function (x, y) {
                    return (x + y);
                }
            })
    }
    catch (err) {
        callback(err);
    }
}