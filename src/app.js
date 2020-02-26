import { moduleAName } from "./moduleA";
import { moduleBName } from "./moduleB";
import { moduleCName } from "./moduleC";
import { getModuleDescription } from "./modulesDescriptions";

export function renderApp(element) {
  element.innerHTML = `
    <p>Hello World!</p>
    <p>Modules:</p>
    <ul>
      <li>${moduleAName}, ${getModuleDescription(moduleAName)}</li>
      <li>${moduleBName}, ${getModuleDescription(moduleBName)}</li>
      <li>${moduleCName}, ${getModuleDescription(moduleCName)}</li>
    </ul>
  `;
}
