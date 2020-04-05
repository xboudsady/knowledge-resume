// Grab all timeline items
const items = document.querySelectorAll('#timeline li');    


const isInViewport = el => {
    // Method returns the size of an element and its position relative to the viewport.
    const rect = el.getBoundingClientRect(); 

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Loop through each item, checking to see if it's in the viewport, and add class of show
const run = () => {
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
}


// Firing off Events, when page loads, the window is resized, or scrolling the page
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

