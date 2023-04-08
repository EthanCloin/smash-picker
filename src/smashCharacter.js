const ICON_PATH = "../static/roster-icons/";
const ICON_FILENAME_ATTR = "iconFilename";
class SmashCharacter extends HTMLElement {
  constructor() {
    super();

    const iconFilename = this.getAttribute(ICON_FILENAME_ATTR);

    this.attachShadow({ mode: "open" });
    this._defineStyle();

    this._defineTemplate(iconFilename);
  }

  _defineStyle() {
    const _style = document.createElement("style");
    _style.innerHTML = `
    .character-card {
        color: tomato
    }

    `;
    this.shadowRoot.appendChild(_style);
  }

  _defineTemplate(iconFilename) {
    const _template = document.createElement("template");

    _template.innerHTML = `
    <div>
    <img src="${ICON_PATH}${iconFilename}"/>
    </div>
        `;

    this.shadowRoot.appendChild(_template.content.cloneNode(true));
  }
}

customElements.define("smash-character", SmashCharacter);
