import Page from "classes/Page"

export default class Home extends Page {
  constructor() {
    super({
      id: "about",
      element: ".about",
      elements: {
        aboutBtn: "#about_btn"
      }
    })
  }

  create() {
    super.create()
    console.log("About Class")
  }
}
