function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  let kelompokA = [],
  kelompokB = [],
  kelompokC = [],
  kelompokD = [],
  kelompokE = [],
  kelompokF = [],
  kelompokG = [],
  kelompokH = [],
  kelompokI = [],
  kelompokJ = [],
  kelompokK = [],
  kelompokL = [],
  kelompokM = [],
  kelompokN = [],
  kelompokO = [],
  kelompokP = [],
  kelompokQ = [],
  kelompokR = [],
  kelompokS = [],
  kelompokT = [],
  kelompokU = [],
  kelompokV = [],
  kelompokW = [],
  kelompokX = [],
  kelompokY = [],
  kelompokZ = [],
  grupHewan = [];
  for (i=0; i < animals.length ; i++) {      
    switch (animals[i][0]) {      
      case 'a' : kelompokA.push(animals[i]); break;
      case 'b' : kelompokB.push(animals[i]); break;
      case 'c' : kelompokC.push(animals[i]); break;
      case 'd' : kelompokD.push(animals[i]); break;
      case 'e' : kelompokE.push(animals[i]); break;
      case 'f' : kelompokF.push(animals[i]); break;
      case 'g' : kelompokG.push(animals[i]); break;
      case 'h' : kelompokH.push(animals[i]); break;
      case 'i' : kelompokI.push(animals[i]); break;
      case 'j' : kelompokJ.push(animals[i]); break;
      case 'k' : kelompokK.push(animals[i]); break;
      case 'l' : kelompokL.push(animals[i]); break;
      case 'm' : kelompokM.push(animals[i]); break;
      case 'n' : kelompokN.push(animals[i]); break;
      case 'o' : kelompokO.push(animals[i]); break;
      case 'p' : kelompokP.push(animals[i]); break;
      case 'q' : kelompokQ.push(animals[i]); break;
      case 'r' : kelompokR.push(animals[i]); break;
      case 's' : kelompokS.push(animals[i]); break;
      case 't' : kelompokT.push(animals[i]); break;
      case 'u' : kelompokU.push(animals[i]); break;
      case 'v' : kelompokV.push(animals[i]); break;
      case 'w' : kelompokW.push(animals[i]); break;
      case 'x' : kelompokX.push(animals[i]); break;
      case 'y' : kelompokY.push(animals[i]); break;
      case 'z' : kelompokZ.push(animals[i]); break;
    }
  }
  if (kelompokA.length > 0) { grupHewan.push(kelompokA)}
  if (kelompokB.length > 0) { grupHewan.push(kelompokB)}
  if (kelompokC.length > 0) { grupHewan.push(kelompokC)}
  if (kelompokD.length > 0) { grupHewan.push(kelompokD)}
  if (kelompokE.length > 0) { grupHewan.push(kelompokE)}
  if (kelompokF.length > 0) { grupHewan.push(kelompokF)}
  if (kelompokG.length > 0) { grupHewan.push(kelompokG)}
  if (kelompokH.length > 0) { grupHewan.push(kelompokH)}
  if (kelompokI.length > 0) { grupHewan.push(kelompokI)}
  if (kelompokJ.length > 0) { grupHewan.push(kelompokJ)}
  if (kelompokK.length > 0) { grupHewan.push(kelompokK)}
  if (kelompokL.length > 0) { grupHewan.push(kelompokL)}
  if (kelompokM.length > 0) { grupHewan.push(kelompokM)}
  if (kelompokN.length > 0) { grupHewan.push(kelompokN)}
  if (kelompokO.length > 0) { grupHewan.push(kelompokO)}
  if (kelompokP.length > 0) { grupHewan.push(kelompokP)}
  if (kelompokQ.length > 0) { grupHewan.push(kelompokQ)}
  if (kelompokR.length > 0) { grupHewan.push(kelompokR)}
  if (kelompokS.length > 0) { grupHewan.push(kelompokS)}
  if (kelompokT.length > 0) { grupHewan.push(kelompokT)}
  if (kelompokU.length > 0) { grupHewan.push(kelompokU)}
  if (kelompokV.length > 0) { grupHewan.push(kelompokV)}
  if (kelompokW.length > 0) { grupHewan.push(kelompokW)}
  if (kelompokX.length > 0) { grupHewan.push(kelompokX)}
  if (kelompokY.length > 0) { grupHewan.push(kelompokY)}
  if (kelompokZ.length > 0) { grupHewan.push(kelompokZ)}
  return grupHewan;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'cuka', 'cicit', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]