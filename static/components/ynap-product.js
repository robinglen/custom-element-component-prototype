class ynapProduct extends HTMLElement {

  constructor() {
    super();
    this.img = this.getElementsByTagName('img')[0];

    this.addEventListener("mouseover", this._showSecondaryImage);
    this.addEventListener("mouseout", this._showPrimaryImage);
  }

  _showPrimaryImage() {
    this.img.src = this.img.dataset.primaryImage;
  }

  _showSecondaryImage() {
    this.img.src = this.img.dataset.secondaryImage;
  }

  connectedCallback() {
    // life cycle call back
  }

}
window.customElements.define('ynap-product', ynapProduct);
