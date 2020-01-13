/* Code javascript here */
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to right top, #f46b45, #eea849",
  "linear-gradient(to right top, #005c97, #363795",
  "linear-gradient(to right top, #e53935, #e35d5b"
];

//
const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){

 //Loops all the Sections and gives out classname
 entries.forEach(entry => {
    const className = entry.target.className;
    console.log(className);
    //Tells which anchor is active
    const activeAnchor = document.querySelector(`[data-page=${className}]`);

    //Grab gradient index
    const gradientIndex = entry.target.getAttribute('data-index');

    //Get position of each anchor tag
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };

    //Check if entry is visible or not
    if(entry.isIntersecting){
      //grab bubble and set the properties (width, height, etc)
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
 });
}

sections.forEach(section=>{
  observer.observe(section);
});