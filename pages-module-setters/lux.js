export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        text={data.text}
        buttonText={data.buttonText}
        breadcrumbData={data.breadcrumbData}
        en
      />
    )
    case "Tagers": return (
      <Tagers
        title={data.title}
        text={data.text}
      />
    )
    case "Features": return (
      <Features
        title={data.title}
        text={data.text}
        recoilTitle={data.recoilTitle}
        recoilText={data.recoilText}
      />
    )
    case "FeaturesSlider": return (
      <FeaturesSlider
        en
        title={data.title}
      />
    )
    case "InputsWName": return (
      <div className={style.static_form}>
        <InputsWName
          image={data.image}
          objectFit={data.objectFit}
          title={data.title}
          text={data.text}
          buttonText={data.buttonText}
          en
        />
      </div>
    )
    case "Shockproof": return (
      <Shockproof
        title={data.title}
        text={data.text}
      />
    )
    case "NetronicFeatures": return (
      <NetronicFeatures en />
    )
    case "Set": return (
      <Set
        tabTitleOne={data.tabTitleOne}
        tabTitleTwo={data.tabTitleTwo}
        tabTitleThree={data.tabTitleThree}
        tabTitleFive={data.tabTitleFive}
        tabTitleSix={data.tabTitleSix}
        tabTitleFour={data.tabTitleFour}
        title={data.title}
        buttonText={data.buttonText}
        en
      />
    )
  }
}