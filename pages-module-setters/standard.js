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