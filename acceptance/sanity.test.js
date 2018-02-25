Feature('My First Test')

Scenario('it renders', (I) => {
  I.amOnPage('/')
  I.see('Times')
  I.see('Moves')
})

Scenario('it takes a video input', (I) => {
  I.amOnPage('/')
  I.fillField('videoInput', 'https://www.youtube.com/watch?v=QrYdsayCLSE')
  I.pressKey('Enter')
  pause()
})
