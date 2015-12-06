/* Keyboard controls
 *
 * left arrow	37
 * up arrow	    38
 * right arrow	39
 * down arrow	40
 *
 * */

// Hash code converter for our string objects
String.prototype.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length == 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
