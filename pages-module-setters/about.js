export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        title={data.title}
        text={data.text}
      />
    )
    case "Road": return (
      <Road
        text={data.text}
        sliderData={data.sliderData}
        title={data.title}
        cellTitle={data.cellTitle}
        cellText={data.cellText}
        cellTwoTitle={data.cellTwoTitle}
        cellTwoText={data.cellTwoText}
        cellThreeTitle={data.cellThreeTitle}
        cellThreeText={data.cellThreeText}
        cellFourTitle={data.cellFourTitle}
        cellFourText={data.cellFourText}
        cellFiveTitle={data.cellFiveTitle}
        cellFiveText={data.cellFiveText}
      />
    )
    case "Leaders": return (
      <Leaders
        title={data.title}
        slidesToShow={data.slidesToShow}
        sliderData={data.sliderData}
        secondTitle={data.secondTitle}
        textTwo={data.textTwo}
        cellOneTitle={data.cellOneTitle}
        cellOneSubtitle={data.cellOneSubtitle}
        cellOneText={data.cellOneText}
        cellTwoTitle={data.cellTwoTitle}
        cellTwoSubtitle={data.cellTwoSubtitle}
        cellTwoText={data.cellTwoText}
        cellThreeTitle={data.cellThreeTitle}
        cellThreeSubtitle={data.cellThreeSubtitle}
        cellThreeText={data.cellThreeText}
        cellFourTitle={data.cellFourTitle}
        cellFourSubtitle={data.cellFourSubtitle}
        cellFourText={data.cellFourText}
      />
    )
    case "Trust": return (
      <Trust
        title={data.title}
        text={data.text}
        sliderData={data.sliderData}
        image={data.image}
      />
    )
    case "Development": return (
      <Development
        title={data.title}
        subtitleFirst={data.subtitleFirst}
        textFirst={data.textFirst}
        subtitleSecond={data.subtitleSecond}
        textSecond={data.textSecond}
        subtitleThird={data.subtitleThird}
        textThird={data.textThird}
        subtitleFourth={data.subtitleFourth}
        textFourth={data.textFourth}
        subtitleFivth={data.subtitleFivth}
        textFivth={data.textFivth}
      />
    )
    case "Final": return (
      <Final
        title={data.title}
        text={data.text}
        textTwoRes={data.textTwoRes}
        textTwo={data.textTwo}
      />
    )
  }
}