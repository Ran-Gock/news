let articlesImg = document.querySelectorAll('.news-article-img');
let articlesText = document.querySelectorAll('.news-article-text');

for (let i = 0; i < articlesImg.length; i++) {
  if(articlesText.length > 0)
    articlesImg[i].style.height = articlesText[i].offsetHeight + 'px';
}

let header = document.querySelector('header');
let popCateg = document.querySelector('.pop-categ');
let main = document.querySelector('main');

wrapper.style.top = header.offsetHeight + 'px';
popCateg.style.top = header.offsetHeight + 20 + 'px';
main.style.marginTop = header.offsetHeight + 'px';

let newsH2 = document.querySelectorAll('.news h2');
if (newsH2.length > 0) {
  for (let i = 0; i < newsH2.length; i++) {
    newsH2[i].style.top = header.offsetHeight + 'px';
  }
}

function onEntry(entry) {
  entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
      else if (!change.target.classList.contains('no-repeating')) {
        change.target.classList.remove('element-show');
      }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

window.onbeforeunload = function() {
  for (let elm of elements) {
    observer.unobserve(elm);
    elm.classList.remove('element-show');
    elm.classList.add('element-hide-fast');
  }
};