import { PolymerElement, html } from '@polymer/polymer';

class CustomElement extends PolymerElement {
    static get is() {
        return 'custom-element';
    }

    static get template() {
        return html`
      <style>:host { color: red; }</style>
      <div>àaáaâaä</div>
      <slot></slot>
    `;
    }
}

customElements.define(CustomElement.is, CustomElement);