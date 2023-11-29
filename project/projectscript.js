function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      if (tab.id === `${tabName}Tab`) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (link.textContent.toLowerCase() === tabName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  