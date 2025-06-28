
// Initialize admin info only if not already stored
if (!localStorage.getItem('adminInfo')) {
  localStorage.setItem('adminInfo', JSON.stringify({
    id: 'alltimelinks@kminternational.com',
    password: 'AllTimeLinks#@789987#@456654',
    masterCode: '109678'
  }));
}

// Admin login
function adminLogin() {
  const inputId = document.getElementById('adminId').value.trim();
  const inputPass = document.getElementById('adminPassword').value.trim();
  const admin = JSON.parse(localStorage.getItem('adminInfo'));

  if (!inputId || !inputPass) {
    alert('Please enter both ID and password');
    return;
  }

  if (admin.id === inputId && admin.password === inputPass) {
    alert('Login successful!');
    window.location.href = 'admin.html';
  } else {
    alert('Incorrect ID or password');
  }
}

// Show reset form
function showReset() {
  document.getElementById('resetBox').style.display = 'block';
}

// Reset password
function resetAdminPassword() {
  const code = document.getElementById('masterCode').value.trim();
  const newPass = document.getElementById('newAdminPass').value.trim();
  const admin = JSON.parse(localStorage.getItem('adminInfo'));

  if (!code || !newPass) {
    alert('Enter master code and new password');
    return;
  }

  if (admin.masterCode === code) {
    admin.password = newPass;
    localStorage.setItem('adminInfo', JSON.stringify(admin));
    alert('Password reset successfully!');
    document.getElementById('resetBox').style.display = 'none';
  } else {
    alert('Invalid master code');
  }
}

// Open admin modal
function openAdminLogin() {
  document.getElementById('adminModal').style.display = 'flex';
}

// Close admin modal
function closeAdminLogin() {
  document.getElementById('adminModal').style.display = 'none';
}

