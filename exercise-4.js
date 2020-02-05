var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(datas) {
  datas.splice(1,1,'Roman Alamsyah Elsharawy');
  datas.splice(2,1,'Provinsi Bandar Lampung');
  datas.splice(4,0,'Pria');
  datas.splice(5,1,'SMA Internasional Metro');
  console.log(datas);
  let bulans = datas[3].split('/');
  let hasilSplitTanggal = datas[3].split('/');
  let bulan = parseInt(bulans[1]);
  switch (bulan) {
    case 1 : console.log(`Januari`);
      break;
    case 2 : console.log(`Februari` );
      break;
    case 3 : console.log(`Maret` );
      break;
    case 4 : console.log(`April` );
      break;
    case 5 : console.log(`Mei` );
      break;
    case 6 : console.log(`Juni` );
      break;
    case 7 : console.log(`Juli` );
      break;
    case 8 : console.log(`Agustus` );
      break;
    case 9 : console.log(`September` );
      break;
    case 10 : console.log(`Oktober` );
      break;
    case 11 : console.log(`November` );
      break;
    case 12 : console.log(`Desember` );
      break;
  }
  bulans.sort(function(a, b){return b-a});
  console.log(bulans);
  let joinTanggal = hasilSplitTanggal.join('-');
  console.log(joinTanggal);
  console.log(datas[1].slice(0,14));
}

dataHandling2(input);