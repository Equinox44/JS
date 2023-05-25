let sentence = ['Hello, ', 'name', 'is', 'Kyle']
let greetingEl = document.getElementById('greeting')

for(x = 0; x < sentence.length; x+=1){
    greetingEl.textContent+=' ' + sentence[x]
}