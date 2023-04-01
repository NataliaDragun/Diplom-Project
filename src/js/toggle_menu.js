var menuList = document.getElementById('menuList')
menuList.style.maxHeight = '0px';

function toggleMenu() {
  (menuList.style.maxHeight == '0px')
  ? menuList.style.maxHeight = '300px'
  : menuList.style.maxHeight = '0px'
}

// FILTER BLOCK
var filterList = document.getElementById('filter')
filterList.style.maxHeight = '0px';

function toggleOpenMenu() {
  (filterList.style.maxHeight == '0px')
  ? filterList.style.maxHeight = '700px'
  : filterList.style.maxHeight = '0px'
}