setTimeout(function(){
	var $h1=document.querySelector('h1');
	$h1.textContent="Warsaw JS Workshop #1";
},4000);


(function () {

	console.log(document.querySelector('h1'));
	document.querySelector('h1').innerHTML='Hello WarsawJS';

	document.querySelector('h1').addEventListener('click', onClick);

	var top = 0;

	function onClick(event){
		
		console.log(event.target.style.top);
		//var top =event.target.style.top;
		console.log('top', top);
		top += 50;
		console.log('top+50',top);
		event.target.style.top=top+'px';
	}

})();

class Gallery {
    constructor(galleryEl) {
        this.$gallery = galleryEl;
        this.$area = document.querySelector('.big-picture');
        this.$areaImg = document.querySelector('.big-picture-img');
         this.$areaClose = document.querySelector('.big-picture-close');
        this._setupEvents();
    }
    _setupEvents() {
        this.$gallery.addEventListener('click', (evt) => {
            let $clickedElement = evt.target;

            console.log($clickedElement.src);

            let el1 = document.createElement('img');
            let closeButton = document.createElement('p');
            closeButton.innerHTML='x';
            closeButton.classList.add("close-picture");
            //closeButton.style.position='relative';
            //closeButton.style.top='0';
            //closeButton.style.right='0';

            el1.src=$clickedElement.src;
            console.log(el1.src);
            
            

            this.$area.style.position="absolute";
            this.$area.style.top=0;
            this.$area.style.left=0;
            this.$area.style.display='block';

            //this.$area.style.width='100%';
            //this.$area.style.height='100%';
            //this.$area.style.opacity='1';
            //this.$area.style.backgroundColor='black';

            this.$areaImg.innerHTML='';
            this.$areaImg.appendChild(el1);


            //this.$area.addEventListener('click', (evt) => {
            //	let $clickedElement2=evt.target;
            //	console.log($clickedElement2.src);
          //}


            //TODO
        });
    }
}


window.addEventListener('DOMContentLoaded', function(){
    let galleryElement = document.querySelector('#gallery');
    new Gallery(galleryElement);
});
