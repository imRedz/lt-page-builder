
// import { setInputsModule } from "./inputsModulesSetter"
// import { setMobileClubModule } from "./pages-module-setters/mobileClub"
// import { setFalconModule } from "./pages-module-setters/falcon"
import { dataBuilder } from "./funtions/dataBuilder"
import { setMainModule } from "./pages-module-setters/main"

export function setModule(pageName, moduleName, data) {

  switch (pageName) {
    // case "Falcon": return (setFalconModule(moduleName, data))
    // case "Mobile-Club": return (setMobileClubModule(moduleName, data))
    // case "Inputs": return (setInputsModule(moduleName, data))
    case "main": return (setMainModule(moduleName, dataBuilder(data)))
  }
}

