import Home from "./pages/Home"
import About from "./pages/About"
import Navigation from "./components/Navigation"

class App {
  constructor() {
    this.createContent()
    this.createPages()
    this.addRouterListeners()
  }

  createContent() {
    this.content = document.querySelector(".content")
    this.template = this.content.getAttribute("data-template")
  }

  createNavigation() {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPages() {
    this.pages = {
      home: new Home(),
      about: new About()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  // Mimic React Router
  async onChange(url) {
    const request = await window.fetch(url)

    //Setting router path on URL
    const anchor = document.createElement("a")
    anchor.href = url
    this.onNavigate(anchor.pathname)

    // Rendering page
    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement("div")

      div.innerHTML = html

      const divContent = div.querySelector(".content")
      this.template = divContent.getAttribute("data-template")

      this.content.setAttribute("data-template", this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]
      this.page.create()
      this.addRouterListeners()
    } else {
      const err = new Error("Error on fetch")
      console.log(err)
    }
  }

  onNavigate(pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname)
  }

  addRouterListeners() {
    const links = document.querySelectorAll("a")

    Object.keys(links).forEach((key) => {
      const link = links[key]

      link.onclick = (event) => {
        event.preventDefault()
        const { href } = link
        this.onChange(href)
      }
    })
  }
}

new App()
