const sectionOne = document.querySelector('.section1');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries,
     observer) {
         entries.forEach(entry => {
             console.log(entry);
         });
        }, options);

        observer.observe(sectionsOne);
