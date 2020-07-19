const serverOne = Document.getElementById('server-one');

serverOne.onclick = function(e){
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'outset');
    this.style.backgroundColor = 'red';
}