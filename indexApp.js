const storyBlock = document.querySelector('.story-block');
const scroll = document.querySelector('.scroll');
const scrollIndicators = document.querySelector('.scroll-indicators');
const leftScroll = document.querySelector('.left-scroll');
const rightScroll = document.querySelector('.right-scroll');

const Myvars = {}

const getActive = (t) => {
        Myvars.allScrollIndicators = t.parentElement.parentElement.children[1].children
        Myvars.allScrollIndicators = Array.from(Myvars.allScrollIndicators)
        Myvars.activeStory = storyBlock.children
        Myvars.activeStory = Array.from(Myvars.activeStory)

        isActive = Myvars.allScrollIndicators.find((test) => {
            return test.classList.contains('active')
       });
       isActiveStory = Myvars.activeStory.find((trial) => {
           return trial.classList.contains('d-block')
       });
       return(Myvars.allScrollIndicators, Myvars.activeStory)
}

const findActive = () =>{
    isActive.classList.remove('active');
    isActiveStory.classList.remove('d-block', 'active-story');
    isActiveStory.classList.add('d-none')
}

const changeActive = () => {
    if(Myvars.target.parentElement.classList.contains('left-scroll')){
        if(!Myvars.allScrollIndicators[0].classList.contains('active')){
            findActive()
            isActiveStory.previousElementSibling.classList.add('d-block' ,'active-story')
            isActive.previousElementSibling.classList.add('active')  
        }else{
            findActive()
            Myvars.allScrollIndicators[Myvars.allScrollIndicators.length - 1].classList.add('active')
            Myvars.activeStory[Myvars.activeStory.length - 1].classList.add('d-block')  
        }
    } else if(Myvars.target.parentElement.classList.contains('right-scroll')){
        if(!Myvars.allScrollIndicators[Myvars.allScrollIndicators.length - 1].classList.contains('active')){
            findActive()
            isActive.nextElementSibling.classList.add('active')
            isActiveStory.nextElementSibling.classList.add('d-block')
        }else{
            findActive()
            Myvars.allScrollIndicators[0].classList.add('active')
            Myvars.activeStory[0].classList.add('d-block')
        }
    }
}


const carousel = function(e){
    Myvars.target = e.target
    getActive(Myvars.target)
    changeActive()
}


scroll.addEventListener('click', carousel)
