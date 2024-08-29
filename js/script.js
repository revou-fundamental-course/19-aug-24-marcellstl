// ini javascript

function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name;
  }
  
  replaceName();
  
  // document.getElementById("gantiNama").addEventListener("click", function () {
  //   replaceName();
  // });
  
  function setSenderUI(nama, tanggalLahir, jenisKelamin, pesan) {
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-tanggal-lahir").innerHTML = tanggalLahir;
    document.getElementById("sender-jenis-kelamin").innerHTML = jenisKelamin;
    document.getElementById("sender-pesan").innerHTML = pesan;
  }
  
  function validateform() {
    const nama = document.forms["message-form"]["nama"].value;
    const tanggalLahir = document.forms["message-form"]["tanggal-lahir"].value;
    const jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
    const pesan = document.forms["message-form"]["pesan"].value;
  
    if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
      alert("Tidak boleh ada yang kosong");
      return false;
    }
  
    setSenderUI(nama, tanggalLahir, jenisKelamin, pesan);
    return false;
  }
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs ((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner-img");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
  }