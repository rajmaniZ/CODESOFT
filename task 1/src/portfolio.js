 const img = document.getElementById('flipImg');
    const container = document.querySelector(`.flip-container`);

    container.addEventListener('mousemove', (e) => {

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;//x position withincontainer 

      console.log('filp1');

      if(x>rect.width/2){
        img.style.transform='rotateY(180deg)';
      }else{
        img.style.transform='rotateY(0deg)';
      }
    });


    document.getElementById('getPhoneNumber').addEventListener('click', function () {
      const phone = document.getElementById('phone');
      phone.style.display = phone.style.display === 'none' ? 'block' : 'none';
    });