const STATE = {
  'CONNECTING': 0,
  'OPEN':       1,
  'CLOSING':    2,
  'CLOSED':     3
};

class WishWebSocket {
  /**
   * @params {string} url
   * @params {string|string[]} protocols
   */
  constructor(url, protocols) {
    if(!this._validate_url) throw "parameter url is not valid";

    this.onopen    = () => {};
    this.onerror   = () => {};
    this.onclose   = () => {};
    this.onmessage = () => {};

    // read only attributes
    this.url = url;
    this.extensions = '';
    this.protocol = protocols; // fixme
    this.readyState = STATE.CONNECTING;
    this.bufferedAmount = 0;
    this.binaryType = '';

    this._connect()
  }

  /**
   * @params {string|ArrayBuffer|Blob} data
   */
  send(data) {
  }

  /**
   * @params {unsigned short} code
   * @params {string} reason
   */
  close(code, reason) {
  }

  /**
   * @params {string} url
   */
  _validateurl(url) {
    return true; //fixme
  }

  /**
   */
  _connect() {
  }
}

module.exports = WishWebSocket;
