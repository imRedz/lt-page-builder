export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        title={data.title}
        text={data.text}
        buttonText={data.buttonText}
        image={data.image}
      />
    )
    case "SolveProblems": return (
      <SolveProblems
        title={data.title}
        text={data.text}
        image={data.image}
        data={data.data}
      />
    )
    case "Products": return (
      <Products
        title={data.title}
        text={data.text}
        data={data.data}
      />
    )
    case "Clients": return (
      <Clients
        title={data.title}
        data={data.data}
      />
    )
    case "CTA": return (
      <CTA
        title={data.title}
        text={data.text}
        image={data.image}
        buttonText={data.buttonText}
        link={data.link}
      />
    )
  }
}