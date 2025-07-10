const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

    document.addEventListener("DOMContentLoaded", () => {
        const btnLoginPopup = document.querySelector('.btnLogin-popup');
        const coverBox = document.querySelector('.cover_box');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const iconClose = document.querySelector('.icon-close');
      
        function activateCoverBox() {
          coverBox.classList.add('active');
        }
      
        function deactivateCoverBox() {
          coverBox.classList.remove('active');
        }
      
        function activatePopup() {
          coverBox.classList.add('active-popup');
        }
      
        function deactivatePopup() {
          coverBox.classList.remove('active-popup');
          coverBox.classList.remove('active');
        }
      
        if (btnLoginPopup) btnLoginPopup.addEventListener('click', activatePopup);
        if (registerLink) registerLink.addEventListener('click', activateCoverBox);
        if (loginLink) loginLink.addEventListener('click', deactivateCoverBox);
        if (iconClose) iconClose.addEventListener('click', deactivatePopup);
      });
      
    
    
    // Hesabı devre dışı bırak butonuna tıklanınca yapılacak işlem
    document.getElementById('disableAccount').addEventListener('click', function() {
        document.getElementById('message').innerHTML = 'Hesabınız devre dışı bırakıldı.';
       
    });
    
    // Çıkış yap butonuna tıklanınca yapılacak işlem
    document.getElementById('logout').addEventListener('click', function() {
        document.getElementById('message').innerHTML = 'Çıkış yapıldı.';
      
    });
    
    // Hesabı devre dışı bırak butonuna tıklanınca yapılacak işlem
    document.getElementById('disableAccount').addEventListener('click', function() {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = 'Hesabınız devre dışı bırakıldı.';
        messageDiv.style.display = 'block'; 
        messageDiv.style.opacity = '1'; 
        
       
        setTimeout(function() {
            messageDiv.style.opacity = '0'; 
            setTimeout(function() {
                messageDiv.style.display = 'none'; 
            }, 500); 
        }, 3000); 
    });
    
    // Çıkış yap butonuna tıklanınca yapılacak işlem
    document.getElementById('logout').addEventListener('click', function() {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = 'Çıkış yapıldı.';
        messageDiv.style.display = 'block'; // Mesajı göster
        messageDiv.style.opacity = '1'; 
        
        
        setTimeout(function() {
            messageDiv.style.opacity = '0'; 
            setTimeout(function() {
                messageDiv.style.display = 'none'; // Tamamen gizle
            }, 500); 
        }, 3000); 
    });
    
    function toggleProfileOptions() {
        const profileOptions = document.getElementById('profile-options');
        // Profil menüsünü açıp kapat
        if (profileOptions.style.display === 'block') {
            profileOptions.style.display = 'none';
        } else {
            profileOptions.style.display = 'block';
        }
    }
    function editProfile() {
        alert('Profil düzenleme sayfası');
    }
    
    function deleteProfile() {
        alert('Profiliniz silinecek emin misiniz?');
    }
    
    function addProfile() {
        alert('Yeni profil eklemek istiyor musunuz?');
    }
    
    
    
    
    const btnTogglePopup = document.querySelector('.btnLogin-popup'); 
    const coverBox = document.querySelector('.cover_box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const iconClose = document.querySelector('.icon-close');
    
    function activateCoverBox() {
        coverBox.classList.add('active');
    }
    
    function deactivateCoverBox() {
        coverBox.classList.remove('active');
    }
    
    function activatePopup() {
        coverBox.classList.add('active-popup');
    }
    
    function deactivatePopup() {
        coverBox.classList.remove('active-popup');
    }
    
    registerLink.addEventListener('click', activateCoverBox);
    loginLink.addEventListener('click', deactivateCoverBox);
    btnTogglePopup.addEventListener('click', activatePopup);
    iconClose.addEventListener('click', deactivatePopup);
    
    
    
    
    