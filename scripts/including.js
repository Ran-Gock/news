let wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentHTML('beforebegin', [
  '<header class="element-animation no-repeating">',
    '<img src="images/N_Icon.png" alt="News icon">',
    '<h1>ews Website</h1>',
    '<img src="images/Nav_Icon.png" class="nav-icon" alt="Navigation Icon">',
    '<nav>',
      '<ul class="header-nav-list">',
        '<li><a href="#">Home</a></li>',
        '<li><a href="#">Categories</a></li>',
        '<li><a href="#">About</a></li>',
        '<li><a href="#">Contact</a></li>',
      '</ul>',
    '</nav>',
  '</header>'
].join('\n'));

wrapper.querySelector('main').insertAdjacentHTML('beforeend', [
  '<aside class="pop-categ element-animation no-repeating">',
    '<h2>Popular Categories</h2>',
    '<ul class="pop-categ-list">',
      '<li><a href="#">Sports</a></li>',
      '<li><a href="#">Entertainment</a></li>',
      '<li><a href="#">Technology</a></li>',
      '<li><a href="#">Politics</a></li>',
      '<li><a href="#">Business</a></li>',
    '</ul>',
  '</aside>'
].join('\n'));

wrapper.insertAdjacentHTML('beforeend', [
  '<footer class="element-animation">',
    '<nav>',
      '<ul class="footer-nav-hor-list">',
        '<li>',
          '<ul class="footer-nav-ver-list">',
            '<h3>Home</h3>',
            '<li><a href="#">Home Page</a></li>',
            '<li><a href="#">Main News</a></li>',
            '<li><a href="#">Latest News</a></li>',
          '</ul>',
        '</li>',
        '<li>',
          '<ul class="footer-nav-ver-list">',
            '<h3>Categories</h3>',
            '<li><a href="#">Sports</a></li>',
            '<li><a href="#">Politics</a></li>',
            '<li><a href="#">More</a></li>',
          '</ul>',
        '</li>',
        '<li>',
          '<ul class="footer-nav-ver-list">',
            '<h3>About</h3>',
            '<li><a href="#">About Us</a></li>',
            '<li><a href="#">Privacy Policy</a></li>',
            '<li><a href="#">Terms of Use</a></li>',
          '</ul>',
        '</li>',
      '</ul>',
    '</nav>',
  '</footer>'
].join('\n'));