import {PolymerElement, html} from '@polymer/polymer';

class TestElement extends PolymerElement {
    static get is() {
        return 'test-first';
    }

    static get template() {
        return html`
      <style>:host { color: red; }</style>
      <div>àaáaâaä1</div>
      <slot></slot>
    `;
    }
}

customElements.define(TestElement.is, TestElement);