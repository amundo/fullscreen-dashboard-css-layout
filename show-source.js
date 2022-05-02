let response = await fetch(document.querySelector('link').href)
let css = await response.text()

let body = document.querySelector('body')
let main = document.querySelector('main')

let container

if(main){
  container = main
} else {
  container = body
}

container.textContent = css
container.style.whiteSpace = 'pre'
container.style.fontFamily = 'Fira Mono'