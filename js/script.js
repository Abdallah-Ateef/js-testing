let bttn=document.querySelectorAll('.buttons button');
let hotspot=document.querySelectorAll('.hotspot');
bttn.forEach(ele => {
    ele.addEventListener('click',function(){
      bttn.forEach(bt =>bt.classList.remove('diff'));
        ele.classList.add('diff');
      hotspot.forEach(ele2 =>{
        if(ele.getAttribute('id')== ele2.getAttribute('id')){
          hotspot.forEach(act =>act.classList.remove('active'));
            ele2.classList.add('active');
        }

      })
    })
});

/////////////////////
hotspot.forEach(point =>{
  point.addEventListener('click',function(){
    hotspot.forEach(act =>act.classList.remove('active'));
    this.classList.add('active');
    bttn.forEach(ele2 =>{
      if(point.getAttribute('id')==ele2.getAttribute('id')){
        bttn.forEach(ac =>ac.classList.remove('diff'));
        ele2.classList.add('diff');
      }
    })
  })
})