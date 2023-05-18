const search = document.querySelector('.search')
const item = document.querySelectorAll('.item1')
const anchor = document.querySelectorAll('.items')
const developpementPersonnel = document.querySelector('.developpement-personnel')
const dv = document.querySelector('#dv')
const amours = document.querySelector('.amour')
const  amour = document.querySelector('#amour')
const argents = document.querySelector('.argent')
const  argent = document.querySelector('#argent')
const logiciels = document.querySelector('.logiciel')
const  logiciel = document.querySelector('#logiciel')
const santes = document.querySelector('.sante')
const  sante = document.querySelector('#sante')
const cog = document.querySelector('.cog')
const moon = document.querySelector('.moon')
const colorSpan = document.querySelectorAll('.color span')
const themeCustomization = document.querySelector('.theme-customization')
const root = document.querySelector(':root')
const text = document.querySelectorAll('.text')
const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const dayNight = document.querySelector('.day-night')
const night = document.querySelector('night')
const bars = document.querySelector(".bars")
const main = document.querySelector("main")
const email = document.querySelector('#email')
const names = document.querySelector('#names')
const textarea = document.querySelector('#textarea')
const submit = document.querySelector('.submit')

/////*****SEARCH BAR FUNCTIONNALTY****** */
search.addEventListener('keyup', () =>{
    let val = search.value.toLowerCase();
    item.forEach(cht =>{
        let tt = cht.textContent
        if(tt.toLocaleLowerCase().includes(val.toLocaleLowerCase())){
            cht.style.display ='grid'
        }else{
            cht.style.display ='none'
        }
    })
})
/***** CHANGING ACTIVE WHEN CLICKED*****/
anchor.forEach((anchor) =>{
    anchor.addEventListener('click', () =>{
        removeactive()
        anchor.classList.add('active')
    })
})

/****REMOVE ACTIVE FROM OTHERS** */
let removeactive = ()=>{
    anchor.forEach((anchor) =>{
        anchor.classList.remove('active')
    })
}
/***** ANCHOR TAG WHEN CLICKED BOX SHADOW COMES*****/
developpementPersonnel.addEventListener('click', () =>{
    dv.style.boxShadow ='1px 1px 3px var(--skin-color), -1px -1px 3px var(--skin-color)'
    dv.style.transform = 'scale(1.01)'
    setTimeout(() =>{
        dv.style.boxShadow ='none'
        dv.style.transform = 'scale(1)'

    }, 2000)
})
amours.addEventListener('click', () =>{
      amour.style.boxShadow ='1px 1px 3px var(--skin-color), -1px -1px 3px var(--skin-color)'
      amour.style.transform = 'scale(1.01)'
    setTimeout(() =>{
       amour.style.boxShadow ='none'
       amour.style.transform = 'scale(1)'

    }, 2000)
})
argents.addEventListener('click', () =>{
       argent.style.boxShadow ='1px 1px 3px var(--skin-color), -1px -1px 3px var(--skin-color)'
       argent.style.transform = 'scale(1.01)'
    setTimeout(() =>{
        argent.style.boxShadow ='none'
        argent.style.transform = 'scale(1)'

    }, 2000)
})
logiciels.addEventListener('click', () =>{
       logiciel.style.boxShadow ='1px 1px 3px var(--skin-color), -1px -1px 3px var(--skin-color)'
       logiciel.style.transform = 'scale(1.01)'
    setTimeout(() =>{
        logiciel.style.boxShadow ='none'
        logiciel.style.transform = 'scale(1)'

    }, 2000)
})
santes.addEventListener('click', () =>{
        sante.style.boxShadow ='1px 1px 3px var(--skin-color), -1px -1px 3px var(--skin-color)'
        sante.style.transform = 'scale(1.01)'
    setTimeout(() =>{
        sante.style.boxShadow ='none'
        sante.style.transform = 'scale(1)'

    }, 2000)
})
/******Moon function**** */
moon.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    dayNight.querySelector('i').classList.toggle('fa-sun')
})
/******Cog function**** */
cog.addEventListener('click', () =>{
      themeCustomization.classList.toggle('active')
})
/******color changing when clicked on one of the colors****** */
colorSpan.forEach((clr) =>{
    clr.addEventListener('click', () =>{
        removeborder()
        clr.classList.add('active')
        if(clr.classList.contains('color-1')){
            primaryHue = 351
        }
        else if(clr.classList.contains('color-2')){
            primaryHue =19
        }
        else if(clr.classList.contains('color-3')){
            primaryHue =157
        }
        else if(clr.classList.contains('color-4')){
            primaryHue =217
        }
        else if(clr.classList.contains('color-5')){
            primaryHue =318
        }
        root.style.setProperty('--primary-hue', primaryHue)
    })
})
/***REMOVE BORDER ACTIVE ****/
let removeborder =()=>{
    colorSpan.forEach((clr) =>{
        clr.classList.remove('active')
    })
}
/******
--primary-hue :351;
--skin-color :hsl(var(--primary-hue), 75%, 41%);
--skin-color2 :hsl(19, 96%, 52%);
--skin-color3 : hsl(157, 53%, 45%);
--skin-color4 :hsl(217, 76%, 40%);
--skin-color5 :hsl(318, 87%, 54%);
*/
window.addEventListener('load', () =>{
    if(scroll){
        themeCustomization.classList.remove('active')
    }
})

/***Anchor tag text management*** */
menu.addEventListener('click', () =>{
    sidebar.classList.toggle('active')
})
bars.addEventListener('click', () =>{
    sidebar.classList.toggle('active')
    sidebar.classList.toggle('bar')
    if('active' != 'act'){
        

    }
    
})



