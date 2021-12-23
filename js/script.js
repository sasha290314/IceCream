const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');
const hoursNumber = document.querySelector('.hours');
const minutesNumber = document.querySelector('.minutes');



console.log(new Date());

function clockSaid() {
    let time = new Date();
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 31;

    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;
    hoursNumber.innerHTML = time.getHours();
    minutesNumber.innerHTML = time.getMinutes();
    setTimeout(() => clockSaid(), 1000);

}

clockSaid();


/* **************  tab  *************** */

const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {

    tabsItem[i].addEventListener('click', function () {

        for (let ix = 0; ix < tabsItem.length; ix++) {
            tabsItem[ix].classList.remove('active');
            tabsContentItem[ix].classList.remove('active');
        }
        tabsItem[i].classList.add('active');
        tabsContentItem[i].classList.add('active');
    })
}

/* ****************************************** */

const watchBtn = document.querySelector('.stopwatch__btn'); // stop
const ns = document.querySelector('.stopwatch__nano-seconds') /* nano - second  */
const mrs = document.querySelector('.stopwatch__micro-seconds') /* micro - second  */
const mls = document.querySelector('.stopwatch__mili-seconds') /* mili - second  */
const secondWatch = document.querySelector('.stopwatch__seconds'); // second
const minutesWatch = document.querySelector('.stopwatch__minutes'); // minut
const hoursWatch = document.querySelector('.stopwatch__hours'); //hours
const seconInfo = document.querySelector('.tabsLink__span'); // info






watchBtn.addEventListener('click', function () {
    // this 
    // innerHtml

    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        seconInfo.classList.add('active');

        let i = 0;

        setTimeout(() => stopWatch(this, i), 1000);

    } else if (this.innerHTML == 'stop') {
        seconInfo.classList.remove('active');
        seconInfo.classList.add('active_clear');
        this.innerHTML = 'clear';
    } else {
        this.innerHTML = 'start';
        seconInfo.classList.remove('active_clear');
        /*       secondWatch.innerHTML = 0;
              minutesWatch.innerHTML = 0;
              hoursWatch.innerHTML = 0; */
    }

})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {


        if (i == 3) {
            i = 0;
            ns.innerHTML = i;

            if (mrs.innerHTML == 3) {
                mrs.innerHTML = 0;

                
                if( mls.innerHTML == 3) {
                     mls.innerHTML = 0;
                     
                     if(secondWatch.innerHTML == 3){
                        secondWatch.innerHTML = 0;
                        
                        if(minutesWatch.innerHTML == 3){
                            minutesWatch.innerHTML = 0;
                            
                            if(hoursWatch.innerHTML == 3){
                                hoursWatch.innerHTML = 0;
                            }
                            
                            else{
                                hoursWatch.innerHTML++;
                            }
                        }
                        
                        else{
                            minutesWatch.innerHTML++;
                        }
                    }
                
                    else{
                        secondWatch.innerHTML++;
                    }                
                }
                
                
                
                else {
                    mls.innerHTML++;
                }
                
            } else {
                mrs.innerHTML++;
            }

        } else {
            i++;
            ns.innerHTML = i;
        }



        setTimeout(() => stopWatch(el, i), 10);

    }
}