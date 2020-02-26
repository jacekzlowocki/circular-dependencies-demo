import { moduleAName } from "./moduleA";
import { moduleBName } from "./moduleB";
import { moduleCName } from "./moduleC";

const modulesOrder = [moduleAName, moduleBName, moduleCName];

export const getModuleDescription = moduleName => {
  const index = modulesOrder.indexOf(moduleName);
  const nextIndex = index === modulesOrder.length - 1 ? 0 : index + 1;
  return `next module: ${modulesOrder[nextIndex]}`;
};
