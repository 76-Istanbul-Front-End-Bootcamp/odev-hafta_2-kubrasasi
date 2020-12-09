/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.person.name)
  }
}

var messageFunc = person.message
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name) {
  
  if(typeof name !== 'string'){ // Tip kontrolü yapıyoruz
     return false;
  }
 	
  if(name === ""){			// Hiçbirşey girilmemişse yapıyoruz.
  	return false;
  }
  
  if(name.length === 1){	//Uzunluk 1 mi değil mi diye kontrol ediyoruz
  	 return false
  }
 
  if(name.trim() !== name){	//Sağında solunda boşluk silip eşit mi kontrol ediyoruz
    return false;
  }
  
  var nameCharacterArr=name.split(""); // Karakterleri array'a atıyoruz
  
  for(let nameCharacter in nameCharacterArr){	// Array'e attığımız karakterleri dönüyoruz.
  	
    if(nameCharacterArr[nameCharacter] == " "){ // Boşluk kontrolü yaptırıyoruz.
    	return false;
    }else{
   		return true;
    }
  
  }
 
}

console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName(" \t\n") === false);
console.log(isValidName("X") === false);

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse girildigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){

	// Girilen değerlerin önce tiplerini kontrol ettik.
	
  if(typeof dersSayisi !== 'number' && typeof dersSuresi !== 'number' && typeof dersSayisi !== 'string' && typeof dersSuresi !== 'string'){
     return false;
  }
  
	// Doğrulamayı geçen değerlerin sayı olup olmadığını kontrol ettik.
  
  if(isNaN(dersSayisi) || isNaN(dersSuresi)){
  	return false;
  }
  
  // Girilen değerlerin 
  
  if(typeof dersSayisi === 'string' || typeof dersSuresi === 'string'){
  	var result = Number(dersSayisi) * Number(dersSuresi);
  }else{
  	var result = dersSayisi * dersSuresi;
  }
  
 return result;

}

console.log(katilimSaati( "2" , "1"));
