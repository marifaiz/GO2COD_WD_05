function showAllProjects() {
    const hiddenProjects = document.querySelectorAll('.projects-grid .hidden');
    hiddenProjects.forEach(project => {
      project.style.display = 'block'; 
    });
  
    document.querySelector('.btn-show-all').style.display = 'none';
  }
  