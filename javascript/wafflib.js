function isOffScreen(entity, w, h)
{
	r = entity.getAttribute("r")-0;

	if(entity.getAttribute("cx") <= r)
		entity.setAttribute("cx", r);
	else if(entity.getAttribute("cx") >= w-r)
		entity.setAttribute("cx", w-r);

	if(entity.getAttribute("cy") <= r)
		entity.setAttribute("cy", r);
	else if(entity.getAttribute("cy") >= h-r)
		entity.setAttribute("cy", h-r);
}

function alart(thing)
{
	console.log(thing);
}

function get (which) {
  if (which[0] == "#")
    return document.getElementById(which.substr(1));
  else if (which[0] == ".")
    return document.getElementsByClassName(which.substr(1));
  else
    return document.getElementsByTagName(which);
}

function shuffle(array)
{
    var counter = array.length;

    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}