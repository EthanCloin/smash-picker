import characterData from "../static/character-data.json" assert { type: "json" };
const ICON_PATH = "../static/";
const ICON_FILENAME_ATTR = "iconfilename";
export class SmashCharacter extends HTMLElement {
  /**
   * this attribute tells the custom element to pay attention to
   * the specified attribute and fire the callback when one changes
   */
  static get observedAttributes() {
    return [ICON_FILENAME_ATTR];
  }
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.appendChild(img);
    shadow.appendChild(div);
    // shadow.
    // const style = document.createElement('style');
    // const iconFilename = this.getAttribute(ICON_FILENAME_ATTR);
    // this._defineStyle();
    // this._defineTemplate(iconFilename);
  }

  connectedCallback() {
    console.log("this guy sure is real connected hehe");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Custom element ${name} attr changed from ${oldValue} to ${newValue}`
    );
    updateIcon(this, newValue);
  }
  // _defineStyle() {
  //   const _style = document.createElement("style");
  //   _style.innerHTML = `
  //   .character-card {
  //       color: tomato
  //   }

  //   `;
  //   this.shadowRoot.appendChild(_style);
  // }

  // _defineTemplate(iconFilename) {
  //   const _template = document.createElement("template");

  //   _template.innerHTML = `
  //   <div>
  //   <img src="${ICON_PATH}${iconFilename}"/>
  //   </div>
  //       `;
  //   // console.info(`loading from ${ICON_PATH}${iconFilename}`);
  //   this.shadowRoot.appendChild(_template.content.cloneNode(true));
  // }
}

function updateIcon(smashCharacterElement, newIcon) {
  const shadow = smashCharacterElement.shadowRoot;
  shadow.querySelector("div img").src = newIcon;
}

// add this custom element to the global scope
customElements.define("smash-character", SmashCharacter);

const roster = document.querySelector(".roster");

characterData.forEach((char) => {
  let charElement = document.createElement("smash-character");
  charElement.setAttribute(ICON_FILENAME_ATTR, ICON_PATH + char.iconPath);
  console.info(
    `setting attribute (${charElement[ICON_FILENAME_ATTR]}) to ${
      ICON_PATH + char.iconPath
    }`
  );
  roster.appendChild(charElement);
});
