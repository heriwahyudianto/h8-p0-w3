function balikKata(kata) {
  let balik = '';
  for(i=kata.length-1; i >= 0; i--){
    balik += kata[i];
  }
  return balik;
}
console.log(balikKata('Hello World'));