function get (which) {
  if (which[0] === "#")
    return document.getElementById(which.substr(1));
  else if (which[0] === ".")
    return document.getElementsByClassName(which.substr(1));
  else
    return document.getElementsByTagName(which);
}