const Image1 = document.getElementById("Image1");
const ch = document.getElementById("bt1");
const bw = document.getElementById("buttonwork");



ch.addEventListener('click',function(){
    let src = Image1.src
    if(src.includes('DOCTOR')){
        Image1.src='./NURSE.jpg'
        bw.innerText="MIa Chechi"
    }else{
        Image1.src='./DOCTOR.jpg'
        bw.innerText="Jhonny Ann an Uyir"
    }
})