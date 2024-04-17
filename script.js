function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
  
    
    searchBar.style.display = 'block';
  
    
    searchBar.style.left = '0';
  }
  
  
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  }
  
  function toggleProfileDropdown() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    profileDropdown.style.display =  'block' ;
  
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
  
    if (loginLink) {
      loginLink.addEventListener('click', function() {
        document.getElementById('profile-icon').style.display = 'block';
        document.getElementById('logout-link').style.display = 'block';
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('profile-dropdown').style.display = 'none';
        this.remove();
      });
    }
  
    if (logoutLink) {
      logoutLink.addEventListener('click', function() {
        document.getElementById('profile-icon').style.display = 'none';
        document.getElementById('logout-link').style.display = 'none';
         document.getElementById('login-link').style.display = 'inline-block';
        document.getElementById('profile-dropdown').style.display = 'none';
       
      });
    }
  }
  
  window.onload = function() {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.style.display = 'block';
  };