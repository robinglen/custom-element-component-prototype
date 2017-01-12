class ynapProduct extends HTMLElement {

  constructor() {
    super();
    this.msg = 'Hello, World!';

    this.addEventListener("mouseover", this._showSecondaryImage);
    this.addEventListener("mouseout", this._showPrimaryImage);
  }

  _showPrimaryImage() {
    const img = this.getElementsByTagName('img')[0];
    img.src = img.dataset.primaryImage;
  }

  _showSecondaryImage() {
    const img = this.getElementsByTagName('img')[0];
    img.src = img.dataset.secondaryImage;
  }

  connectedCallback() {
    // life cycle call back
  }

}
window.customElements.define('ynap-product', ynapProduct);
