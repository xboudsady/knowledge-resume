// Grab all timeline items
const items = document.querySelectorAll('#timeline li');    


const isInViewport = eventListner => {
    // Method returns the size of an element and its position relative to the viewport.
    const rectangle = eventListner.getBoundingClientRect(); 

    return (
        rectangle.top >= 0 && rectangle.left >= 0 && rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Loop through each item, checking to see if it's in the viewport, and add class of show
const run = () => {
    items.forEach(item => {
        item.classList.add('show');
    });
};


// Firing off Events, when page loads, the window is resized, or scrolling the page
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

