
class Gallery {
    constructor(galleryEl) {
        this.$gallery = galleryEl;
        this.lenghtGallery=document.getElementsByTagName("li").length;
        //console.log(this.lenghtGallery);
        this.$area = document.querySelector('.big-picture');
        this.$areaImg = document.querySelector('.big-picture-img');
        this.$areaClose = document.querySelector('.big-picture-close');
        this.$areaArrowLeft = document.querySelector('.arrow-left');
        this.$areaArrowRight = document.querySelector('.arrow-right');
        this.$list = document.querySelector('.small-picture');

        this._setupEvents();

  createList(getImages()).map((value) => {
        this.$list.appendChild(value);

        });
    }

    _setupEvents() {
        this.$gallery.addEventListener('click', this._onImgClick.bind(this));
        this.$areaClose.addEventListener('click', this._onAreaCloseClick.bind(this));
        this.$areaArrowLeft.addEventListener('click', this._onAreaArrowLeft.bind(this));
        this.$areaArrowRight.addEventListener('click', this._onAreaArrowRight.bind(this));
    }

 _onImgClick(evt) {
    let $clickedElement = evt.target;

    if ($clickedElement.tagName.toLowerCase() !== 'img') {
        return;
    }    

    let el1 = document.createElement('img');
    el1.src=$clickedElement.src;
    this.current=$clickedElement;

    this.$area.style.display='block';

    this.$areaImg.innerHTML='';
    this.$areaImg.appendChild(el1);
 }

  _onAreaCloseClick(evt) {
    let $clickedElement = evt.target;
    this.$area.style.display='none';
 }

_onAreaArrowLeft(evt){
    let index=this.current.getAttribute('data-index');
    console.log(index);

    if(index>=1){
        index--;
    }
    else{
        index=(document.getElementsByTagName("li").length)-1;
    }


    let el1 = document.createElement('img');
    this.current=el1;
    el1.setAttribute('data-index',index);
    el1.src=getImages()[index];
    console.log(el1);
    this.$areaImg.innerHTML='';
    this.$areaImg.appendChild(el1);
}

 _onAreaArrowRight(evt){
       let index=this.current.getAttribute('data-index');
    console.log(index);

    if(index < (document.getElementsByTagName("li").length-1)){
        index++;
    }
    else{
        index=0;
    }


    let el1 = document.createElement('img');
    this.current=el1;
    el1.setAttribute('data-index',index);
    el1.src=getImages()[index];
    console.log(el1);
    this.$areaImg.innerHTML='';
    this.$areaImg.appendChild(el1);
 }

}

function getImages() {
    return [
        "img/obraz1.jpg",
        "img/obraz2.jpg",
        "img/obraz3.jpg",
        "img/obraz4.jpg",
        "img/obraz5.jpg"
    ]
}
//console.log(getImages);

function createList(arr){
 return arr.map(function(value, index){
            let $listElement = document.createElement('li');
            let el1 = document.createElement('img');
            el1.src=value;
            el1.setAttribute('class', 'img-small');
            el1.setAttribute('data-index', index);
            $listElement.appendChild(el1);
            return $listElement;
        });
}
  


window.addEventListener('DOMContentLoaded', function(){
    let galleryElement = document.querySelector('#gallery');
    new Gallery(galleryElement);
});
