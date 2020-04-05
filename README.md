# Knowledge-Resume

[Demo Site](https://xboudsady.github.io/knowledge-resume/)


Basic HTML &amp; CSS vertical scrolling for chronological timeline work experience

As user vertical scroll, animation will load job experience content.

* CSS Variables
* CSS Keyframe Animations
* CSS Transitions
* JavaScript for Smooth Scrolling
* Font Icon

## Technology Used
* [Font Awesome](https://fontawesome.com/) - Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.

## Page Setup

Two main section, `<header>` for the header content, and `<section>` for the timeline contents. 

The timeline content is made up of `<div>` residing structured in `<ul>` and `<li>`.

As user transition through the page, JavaScript will listen to apply `window.addEventListener()` and listen for page load, scrolling, and reszing; which will trigger a `show` css class to smoothly transition the remaining `div` contents.

### Sample Images

![Screen Capture](img/knowledge-resume-screen.gif)
