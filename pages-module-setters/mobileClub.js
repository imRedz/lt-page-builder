import AllFor from "../../lt-lands-modules/MobileClub/AllFor"
import BusinessSupport from "../../lt-lands-modules/MobileClub/BusinessSupport"
import FAQ from "../../lt-lands-modules/MobileClub/FAQ"
import HowWorks from "../../lt-lands-modules/MobileClub/HowWorks"
import Main from "../../lt-lands-modules/MobileClub/Main"
import MobileDecision from "../../lt-lands-modules/MobileClub/MobileDecision"
import Profit from "../../lt-lands-modules/MobileClub/Profit"
import WhatIs from "../../lt-lands-modules/MobileClub/WhatIs"
import Form from "../../lt-lands-modules/MobileClub/Form";

export function setMobileClubModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        title={data.title}
        buttonText={data.buttonText}
      />
    )
    case "WhatIs": return (
      <WhatIs
        videoLink={data.videoLink}
        title={data.title}
        text={data.text}
      />
    )
    case "HowWorks": return (
      <HowWorks
        videoLink={data.videoLink}
        data={data.data}
        title={data.title}
        buttonText={data.buttonText}
      />
    )
    case "AllFor": return (
      <AllFor
        title={data.title}
        form_title={data.title}
        form_text={data.form_text}
        cell1Title={data.cell1Title}
        cell1Text={data.cell1Text}
        cell2Title={data.cell2Title}
        cell2Text={data.cell2Text}
        cell3Title={data.cell3Title}
        cell3Text={data.cell3Text}
        cell4Title={data.cell4Title}
        cell4Text={data.cell4Text}
        buttonText={data.buttonText}
      />
    )
    case "Profit": return (
      <Profit
        title={data.height}
        cell1Title={data.cell1Title}
        cell1Text={data.cell1Text}
        cell2Title={data.cell2Title}
        cell2Text={data.cell2Text}
        cell3Title={data.cell3Title}
        cell3Text={data.cell3Text}
        cell4Title={data.cell4Title}
        cell4Text={data.cell4Text}
      />
    )
    case "MobileDecision": return (
      <MobileDecision
        title={data.title}
        data={data.data}
        width={data.width}
        height={data.height}
      />
    )
    case "BusinessSupport": return (
      <BusinessSupport
        cell1Title={data.cell1Title}
        cell1Text={data.cell1Text}
        cell1Image={data.cell1Image}
        cell2Title={data.cell2Title}
        cell2Text={data.cell2Text}
        cell2Image={data.cell2Image}
        cell3Title={data.cell3Title}
        cell3Text={data.cell3Text}
        cell3Image={data.cell3Image}
        cell4Title={data.cell4Title}
        cell4Text={data.cell4Text}
        cell4Image={data.cell4Image}
        cell5Title={data.cell5Title}
        cell5Text={data.cell5Text}
        cell6Title={data.cell6Title}
        cell6Text={data.cell6Text}
        buttonText={data.buttonText}
        title={data.title}
        formTitle={data.formTitle}
        formSubTitle={data.formSubTitle}
        formButtonText={data.formButtonText}
      />
    )
    case "FAQ": return (
      <FAQ data={data.data} />
    )
    case "Form": return (
      <Form
        id={data.id}
        theme={data.theme}
        image={data.image}
        objectFit={data.objectFit}
        title={data.title}
        text={data.text}
        buttonText={data.buttonText}
      />
    )
  }
}