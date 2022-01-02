

const sections = document.querySelectorAll('.section');
let takenHugs = 0;
let hugs = [
    './hugs/1.jpg',
    './hugs/2.jpg',
    './hugs/3.jpg',
    './hugs/4.jpg',
    './hugs/5.jpg',
    './hugs/6.jpg',
    './hugs/7.jpg',
    './hugs/8.jpg',
    './hugs/9.jpg',
    './hugs/11.jpg',
    './hugs/12.jpg',
    './hugs/13.jpg',
    './hugs/14.jpg',
    './hugs/15.jpg',
    './hugs/16.jpg',
    './hugs/17.jpg',
    './hugs/18.jpg',
    './hugs/19.jpg',
    './hugs/20.jpg',
    './hugs/21.jpg',
    './hugs/22.jpg',
    './hugs/23.jpg',
    './hugs/24.jpg',
    './hugs/25.jpg',
    './hugs/26.jpg',
    './hugs/27.jpg',
];

let shuffle = () => {
    let currentIndex = hugs.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [hugs[currentIndex], hugs[randomIndex]] = [
        hugs[randomIndex], hugs[currentIndex]];
    }

    var img = new Image();
    img.src=hugs[0]; 
  }

shuffle();


document.getElementById('hugBtn').addEventListener('click', () => {
    sections.forEach(elmnt => {
        elmnt.classList.remove('active');
    });
    changeHug();
    document.getElementById('hug').classList.add('active');
});
document.getElementById('m3lshBtn').addEventListener('click', () => {
    sections.forEach(elmnt => {
        elmnt.classList.remove('active');
    });
    
    document.getElementById('blueVid').play();
    document.getElementById('blue').classList.add('active');
});


let changeHug = () => {
    if(takenHugs === 5){
        document.getElementById('block_hugs').style.display = 'flex';
        document.getElementById('m3lsh_pic').style.display = 'none';
        document.getElementById('hugAgain').innerText = 'آخر واحد يسطا بالله عليك';
    }
    if(takenHugs === 6){
        document.getElementById('block_hugs').style.display = 'none';
        document.getElementById('m3lsh_pic').style.display = 'inline';
        document.getElementById('hugAgain').style.display = 'none';
        return
    }
    document.getElementById('m3lsh_pic').setAttribute('src',  hugs[takenHugs] )
    takenHugs++;
    var img = new Image();
    img.src=hugs[takenHugs]; 
    
}

document.getElementById('hugAgain').addEventListener('click', changeHug);