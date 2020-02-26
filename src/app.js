import { moduleAName, moduleADescription } from "./moduleA";
import { moduleBName, moduleBDescription } from "./moduleB";
import { moduleCName, moduleCDescription } from "./moduleC";

export function renderApp(element) {
  element.innerHTML = `
    <p>Hello World!</p>
    <p>Modules:</p>
    <ul>
      <li>${moduleAName}, ${moduleADescription()}</li>
      <li>${moduleBName}, ${moduleBDescription()}</li>
      <li>${moduleCName}, ${moduleCDescription()}</li>
    </ul>
  `;
}
