var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
            
function dataHandling(datas) {
  for (i=0; i < datas.length ; i++) {
    console.log(`Nomor ID: ${datas[i][0]}`);
    console.log(`Nama Lengkap: ${datas[i][1]}`);
    console.log(`TTL: ${datas[i][2]} ${datas[i][3]}`);
    console.log(`Hobi: ${datas[i][4]}`);
  }
}

console.log(dataHandling(input));