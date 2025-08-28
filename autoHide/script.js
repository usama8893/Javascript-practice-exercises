function autoHideAlert() {
    const alertDiv = document.createElement('div');
    alertDiv.textContent = 'This is an alert!';
    alertDiv.style.background = '#ffdddd';
    alertDiv.style.color = '#a94442';
    alertDiv.style.padding = '1rem';
    alertDiv.style.margin = '1rem 0';
    alertDiv.style.border = '1px solid #a94442';
    alertDiv.style.borderRadius = '4px';
    alertDiv.setAttribute('id', 'auto-alert');
    document.body.prepend(alertDiv);
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}

// Call the function when the page loads
window.onload = autoHideAlert;