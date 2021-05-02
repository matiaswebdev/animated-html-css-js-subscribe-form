
window.addEventListener('load', startApp);

function startApp () 
{

    startInputListener();
   
    let tl = gsap.timeline({repeat:-1, yoyo:true});
    let tl2 = gsap.timeline({repeat:-1, yoyo:true});
    let tl3 = gsap.timeline({repeat:-1, yoyo:true});
    let tl4 = gsap.timeline({yoyo:true});
    
    tl.to('.orb-1', {
        delay:0.4,
        duration:10, 
        x:350, 
    });

    tl2.to('.orb-2', {
        delay:2,
        duration:15, 
        x:450,
    });

    tl3.to('.orb-3', {
        delay:0,
        duration:10, 
        x:40,
    });

    tl4.to('.form-wraper', {
        duration: 1.5,
        y: -50,
        ease:'elastic.out(1, 0.3)'
    })
   
}

function startInputListener () {
    let input = document.querySelector('#agreement_input');
    
    
    
    input.addEventListener('change', function(ev){
        let ischecked = ev.target.checked;
        let bullet = document.querySelector('.agreement-group');

        if(ischecked){
            bullet.classList.add('active');
            return;
        }

        bullet.classList.remove('active');
    })
}