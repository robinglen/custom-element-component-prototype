class ynapProduct extends HTMLElement {

  constructor() {
    super();
    this.element = this.getElementsByTagName('img')[0];

    this.addEventListener("mouseover", this._showSecondaryImage);
    this.addEventListener("mouseout", this._showPrimaryImage);
  }

  _showPrimaryImage() {
    this.element.src  = this.element.dataset.primaryImage;
  }

  _showSecondaryImage() {
    this.element.src = this.element.dataset.secondaryImage;
  }

  connectedCallback() {
    // life cycle call back
  }

}
window.customElements.define('ynap-product', ynapProduct);
