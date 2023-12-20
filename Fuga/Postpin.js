const Http = new XMLHttpRequest();
const url ='meaw_server';
Http.open("POST", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
}