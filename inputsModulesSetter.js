import { InputsWName } from "../modules/LandModules/Inputs/Inputs"

export function setInputsModule(moduleName, data) {
  switch (moduleName) {
    case "InputsWName": return (<InputsWName data={data} />)
  }
}