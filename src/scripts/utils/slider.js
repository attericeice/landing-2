
export function setCurrentSlide(currentSlide, slides, type) {
   switch (type) {
    case 'next':
     if (currentSlide === slides - 1) {
        return 0;
     } else {
        return currentSlide + 1;
     }
     case 'prev':
    if (currentSlide === 0) {
        return slides - 1;
    } else {
        return currentSlide - 1;
    }
   }
}

export function updateSlides(slides, currentSlide) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}