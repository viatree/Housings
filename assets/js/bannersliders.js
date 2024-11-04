document.addEventListener('DOMContentLoaded', function() {
    const totalSlides = document.querySelectorAll('#customCarousel .carousel-item').length;
    const currentSlideElem = document.getElementById('currentSlide');
    const totalSlidesElem = document.getElementById('totalSlides');
    const progressBar = document.getElementById('carouselProgress');

    totalSlidesElem.textContent = totalSlides.toString().padStart(2, '0');

    $('#customCarousel').on('slide.bs.carousel', function (e) {
        let currentIndex = $(e.relatedTarget).index() + 1;
        currentSlideElem.textContent = currentIndex.toString().padStart(2, '0');
        let progressPercent = (currentIndex / totalSlides) * 100;
        progressBar.style.width = `${progressPercent}%`;
    });
});