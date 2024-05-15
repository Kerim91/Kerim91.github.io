showAlert("İngilizce öğrenmek için doğru yer.");
function showAlert(message) {
  alert(message);
}

document
  .getElementById("instagramLink")
  .addEventListener("click", function (event) {
    // Instagram URL'sini belirle
    var instagramURL = "https://www.instagram.com/";

    // Instagram'a yönlendirme işlemi gerçekleştir
    window.location.href = instagramURL;

    // Yönlendirme işleminin varsayılan davranışını engelle
    event.preventDefault();
  });

$(document).ready(function () {
  // Şu anki yılı al
  var currentYear = new Date().getFullYear();

  // Şu anki yılı <p> elementine ekle
  $("#currentYear").text(currentYear);
});

var arkaPlanSiyah = false;

function renkDegistir() {
  if (arkaPlanSiyah) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
  arkaPlanSiyah = !arkaPlanSiyah; // arkaPlanSiyah değişkeninin değerini tersine çevir
}

document
  .getElementById("renkDegistirButton")
  .addEventListener("click", renkDegistir);

var saatZemin = document.getElementById("zemin");

function format(gelen) {
  var StrYap = gelen.toString();
  if (StrYap.length === 1) {
    return "0" + StrYap;
  } else {
    return StrYap;
  }
}

function saatGuncelle() {
  var dd = new Date();
  var hh = dd.getHours();
  var mm = dd.getMinutes();
  var ss = dd.getSeconds();
  saatZemin.textContent = format(hh) + ":" + format(mm) + ":" + format(ss);
}

setInterval(saatGuncelle, 1000); // Milisaniye cinsinden zaman aralığı

setInterval(function () {
  window.location.reload(false);
}, 60000); // Sayfayı 1 dakikada bir yenile

$(document).ready(function () {
  $(".hk").click(function () {
    alert("Kerim");
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".menu").addClass("sabitleme");
    } else {
      $(".menu").removeClass("sabitleme");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 350) {
      $("#yukari").fadeIn(200);
    } else {
      $("#yukari").fadeOut(200);
    }
  });

  $("#yukari").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
});










//panel

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


//filtreleme
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});









// Maskot butonunun olay dinleyicisi
document.getElementById("maskotButton").addEventListener("click", function() {
  $("#p1hareket").css("color", "blue").slideUp(2000).slideDown(2000);
});


// Paragraf kapatma butonlarının olay dinleyicisi
document.querySelectorAll(".removeButton").forEach(function(button) {
  button.addEventListener("click", function() {
    $("p.test").remove();
  });
});


// Boyut butonunun olay dinleyicisi
document.querySelector(".dimensionButton").addEventListener("click", function() {
  var txt = "";
  txt += "Document width/height: " + $(document).width();
  txt += "x" + $(document).height() + "\n";
  txt += "Window width/height: " + $(window).width();
  txt += "x" + $(window).height();
  alert(txt);
});


//paragraf ekleme 

  $("#btn2").click(function(){
    $("ol").append("<li>yeni liste satırım</li>");
  });





  //animasyon
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });





//paragraf rengi değiştirme
  $(document).ready(function(){
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });




  //input ayarlama
  
  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "gray");
    });
    $("input").blur(function(){
      $(this).css("background-color", "cyan");
    });
  });







document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("kullaniciKaydiFormu");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    // Kaydolundu mesajını göster
    alert("Kaydolundu");

    // Formu temizle
    form.reset();
  });
});

document.getElementById("indirButton").addEventListener("click", function () {
  // PDF dosyasının yolu
  var pdfYolu = "Pdfler/Oxford_Lists_A2.pdf";

  var indirLink = document.createElement("a");
  indirLink.href = pdfYolu;
  indirLink.download = "Oxford_Lists_A2.pdf"; // İndirilen dosyanın adı
  document.body.appendChild(indirLink);
  indirLink.click();
  document.body.removeChild(indirLink); // Temizleme
});

const translations = {
  card1: "yürümek",
  card2: "Araba Sürmek",
  card3: "Koşmak",
};

function showTranslation(cardId) {
  document.getElementById(cardId).textContent = translations[cardId];
}

function hideTranslation1(cardId) {
  document.getElementById(cardId).textContent = "Walk";
}

function hideTranslation2(cardId) {
  document.getElementById(cardId).textContent = "Drive";
}

function hideTranslation3(cardId) {
  document.getElementById(cardId).textContent = "Run";
}

// Özlü sözler dizisi
var ozluSozler = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

// Şanslı butonu işlevi
function sansliButonu() {
  // Rastgele bir özlü söz seç
  var rastgeleSoz = ozluSozler[Math.floor(Math.random() * ozluSozler.length)];
  // Özlü sözü ekrana yazdır
  document.getElementById("ozluSoz").innerHTML = rastgeleSoz;
}











const translationss = {
  "hello": "merhaba",
  "goodbye": "hoşça kal",
  "apple": "elma",
  "book": "kitap",
  "city": "şehir",

  // kelimeler buraya aklenebilir,gelişmeye bağlı olarak.
};

function translateWord() {
  var word = document.getElementById("wordToTranslate").value.toLowerCase();
  var translation = translationss[word] || "görünüşe göre kelimeni bulamadık.";
  document.getElementById("translationResult").innerText = translation;
}







function checkAnswers() {
  var correctAnswers = {
    q1: "apple",
    q2: "car",  
    q3: "book"
  };

  var userAnswers = {
    q1: document.querySelector('input[name="q1_options"]:checked').value,
    q2: document.querySelector('input[name="q2_options"]:checked').value,
    q3: document.querySelector('input[name="q3_options"]:checked').value
  };

  var answerResult = document.getElementById("answerResult");
  var score = 0;

  for (var question in correctAnswers) {
    if (correctAnswers[question] === userAnswers[question]) {
      score++;
    }
  }

  answerResult.innerText = "Toplam doğru cevap sayısı: " + score +" yanlisların için üzülme aşağıda aratarak dogrusunu ögrenebilirsin.";
}





function cal() {
  var ses = document.getElementById("ses");
  ses.play();
}






function shareOnFacebook() {
  var url = "https://örnek.com"; // Paylaşılacak URL eklenebilir 
  var title = "yeni favori sitemi buldum."; // Paylaşılacak Başlık eklenebilir
  var description = "nerelerde gezindiğime de bir bak???"; // Paylaşılacak Açıklama neden olmasın
  var imageUrl = "https://örnek.com/logo."; // Paylaşılacak Resim URl spesifik ve tasarlanabilirse olabilir

  var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
  window.open(facebookShareUrl, "_blank");
}

function shareOnTwitter() {
  var url = "https://example.com"; // Paylaşılacak URL
  var text = "yeni favori sitemi buldum."; //paylaşılı Tweet metni

  var twitterShareUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text);
  window.open(twitterShareUrl, "_blank");
}

function shareOnInstagram() {
 
  var twitterShareUrl = "https://instegram.com"
  window.open(twitterShareUrl, "_blank"); 

}




const stars = document.querySelectorAll('.rating input');

stars.forEach(star => star.addEventListener('click', function() {
  alert('siteniz benim için : ' + this.value +" yıldızı hak ediyor.");
}));







//kelime seslendirme
var wordElement1 = document.getElementById("word");
var audio1 = document.getElementById("audio");

wordElement1.addEventListener("click", function() {
    playSound1();
});

function playSound1() {
    audio1.play();
}

var wordElement2 = document.getElementById("word2"); // İkinci <p> etiketi için farklı bir id kullanın, örneğin "word2"
var audio2 = document.getElementById("audio2");

wordElement2.addEventListener("click", function() {
    playSound2();
});

function playSound2() {
    audio2.play();
}










function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  
  if (name === '' || email === '') {
      alert('Lütfen tüm alanları doldurun.');
      return false;
  }
  return true;
}













// Hedef tarihi belirle (May 31, 2024 00:00:00)
var countDownDate = new Date("May 20, 2024 00:00:00").getTime();

// Her saniyede bir geri sayımı güncelle
var x = setInterval(function() {
  // Şu anki tarih ve saat
  var now = new Date().getTime();
  
  // Hedef tarih ile şu anki tarih arasındaki farkı hesapla
  var distance = countDownDate - now;
  
  // Gün, saat, dakika ve saniye cinsinden geri sayımı hesapla
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Geri sayım sonucunu HTML içeriğine yerleştir
  document.getElementById("countdown").innerHTML = days + " gün " + hours + " saat "
  + minutes + " dakika " + seconds + " saniye ";
  
  // Eğer geri sayım tamamlandıysa, sonlandır
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "GERİ SAYIM TAMAMLANDI";
  }
}, 1000);






//canlı sohbet alanı
function openChat() {
  // Yeni bir pencere açma
  window.open("https://www.instagram.com/kerim.han52/", "_blank", "width=400,height=500");
}





//contact sayfamızda tolower case kullanımı
function toLowerCaseInputs1() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "text" || inputs[i].type === "email") {
          inputs[i].addEventListener('input', function(event) {
              event.target.value = event.target.value.toLowerCase();
          });
      }
  }
}











document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun varsayılan davranışını engelle

  // Formdaki değerleri al
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // E-posta içeriği
  var emailContent = "Ad: " + name + "\nE-posta: " + email + "\nMesaj: " + message;

  // E-posta adresinize e-posta gönderme işlemi
  window.location.href = "mailto:kerimhan031@gmail.com=" + encodeURIComponent(emailContent);
});





