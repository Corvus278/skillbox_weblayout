const options = {
  searchEnabled: false,
  position: 'bottom',
  allowHTML: true,
  itemSelectText: '',
}

const element = document.querySelector('#materialSelect')
const choices = new Choices(element, options)
