
const quotes=[
    {
    id: 1,
    quote:"Listen with ears of tolerance! See through the eyes of compassion! Speak with the language of love",
    author:"Rumi"},
    {id: 2,
    quote:"Always remember you are braver than you believe, stronger than you seem, smarter than you think and twice as beautiful as you'd ever imagined. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself",
    author:"Rumi"},
    {id: 3,
    quote:"Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.",
    author:"Rumi"},
    {id: 4,
    quote:"Whenever you are alone, remind yourself that God has sent everyone else away so that there is only you and Him.",
    author:"Rumi"},
    {id: 5,
    quote:"When I run after what I think I want, my days are a furnace of stress and anxiety; if I sit in my own place of patience, what I need flows to me, and without pain. From this I understand that what I want also wants me, is looking for me and attracting me. There is a great secret here for anyone who can grasp it.",
    author:"Rumi"},
    {id: 6,
    quote:"The Inspiration You Seek is Already Within You.Be Silent And Listen.",
    author:"Rumi"},
    {id: 7,
    quote:"I looked for God. I went to a temple and I didn't find him there. Then I went to a church and I didn't find him there. The I went to a mosque and I didn't find him there. Then finally I looked in my heart and there he was.",
    author:"Rumi"},
    {id: 8,
    quote:"Try not to resist the changes that come your way. Instead let life live through you. And do not worry that your life is turning upside down. How do you know that the side you are used to is better than the one to come?",
    author:"Rumi"},
    {id: 9,
    quote:"There is a voice that doesn’t use words. Listen.",
    author:"Rumi"},
    {id: 10,
    quote:"A Candle never Loses any of its Light while Lighting up another candle.",
    author:"Rumi"}];
   
  
  
  
  let text = document.querySelector('#text');
  let author=document.querySelector('#author');
  let newQuote=document.getElementById('new-quote')
  // .onClick=function(){myfunction()}
  
  
  
  
  function myfunction(){
    let random = Math.floor(Math.random()*quotes.length)
  let randomQuotes=quotes[random]
   let quotess=randomQuotes
    // console.log(quotess)
    text.innerHTML=quotess.quote
    author.innerHTML=quotess.author  
    return randomQuotes
    // console.log('works')
  }
  
  // let quoteAPI="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
  // %22There%20is%20only%20one%20way%20to%20avoid%20criticism%3A%20do%20nothing%2C%20say%20nothing%2C%20and%20be%20nothing.%22%20Aristotle"'
  let fromFunction=myfunction();
  let quoteAPI= fromFunction.quote.replace(/ /g,"%20")
  // console.log(quoteAPI)
  let authorAPI=fromFunction.author.replace(/ /g, "%20")
  
  let twitter= 'https://twitter.com/intent/tweet?text='
  twitter=twitter+quoteAPI;
  twitter= twitter+'--'+authorAPI
  document.getElementById('tweet-quote').href= twitter;
  