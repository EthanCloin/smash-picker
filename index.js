class SmashCharacter extends HTMLElement {
  constructor() {
    super();

    const _style = document.createElement("style");
    const _template = document.createElement("template");
    _style.innerHTML = `
    .character-card {
        color: "tomato"
    }

    div {
        background-color: "tomato"
    }

    h1 {
        color: tomato
    }
    `;

    _template.innerHTML = `
        <h1>CharacterName</h1>
        `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(_style);
    this.shadowRoot.appendChild(_template.content.cloneNode(true));
  }
}

customElements.define("smash-character", SmashCharacter);
