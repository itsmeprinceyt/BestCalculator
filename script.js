document.querySelector('.submit').addEventListener('click',()=>{
    let no1= String(document.querySelector('.no1').value);
    let no2= String(document.querySelector('.no2').value);
    if(no1 === '' || no2 === '')
    {
        alert(`Enter both number bitch!`)
        return
    }
    let newString = no1+no2;
    document.querySelector('.Output').textContent = `Output: ${newString} 🤡🤡`
    document.querySelector('.video-container').innerHTML =`
    <p class="js-note">Me To Javascript: </p>
    <video id="myVideo" src="video.mp4" width="500px" autoplay></video>`;
})