import { BreadCrumbs } from "../../lt-modules/BreadCrumbs";

export function setStandartModule(moduleName, data) {
  switch (moduleName) {
    case "BreadCrumbs": return (
      <BreadCrumbs
        color="black"
        breadcrumbData={data.data}
      />
    )
  }
}