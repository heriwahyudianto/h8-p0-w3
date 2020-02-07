function groupAnimals(animals) {
  // you can only write your code here!
  const ABJAD = 'abcdefghijklmnopqrstuvwxyz';
  let grupHewan = [];
  let kelompok = [];
  for (i=0; i < ABJAD.length ; i++) {
    kelompok = [];
    for (j=0; j < animals.length; j++) {
      if (animals[j][0] === ABJAD[i]) {
        kelompok.push(animals[j]);
      }
    } 
    if (kelompok.length > 0) {  
      grupHewan.push(kelompok);
    }
  } 
  return grupHewan;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'cuka', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]