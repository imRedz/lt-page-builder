
import { setInputsModule } from "./inputsModulesSetter"
import { setMobileClubModule } from "./pagesModulesSetters/mobileClub"
import { setNewsModule } from "./newsModulesSetter"
import { setFalconModule } from "./pagesModulesSetters/falcon"

export function setModule(pageName, moduleName, data) {
  switch (pageName) {
    case "Falcon": return (setFalconModule(moduleName, data))
    case "Mobile-Club": return (setMobileClubModule(moduleName, data))
    case "News": return (setNewsModule(moduleName, data))
    case "Inputs": return (setInputsModule(moduleName, data))
  }
}

