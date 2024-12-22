document.getElementById('deleteAccountBtn').addEventListener('click', function() {
    const whatsappNumber = document.getElementById('whatsappNumber').value;

    // Validate WhatsApp number format
    const regex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/;
    if (!regex.test(whatsappNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Number',
            text: 'Please enter a valid Indonesian WhatsApp number (e.g., 628123456789 or 08123456789).',
        });
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: 'Deleting your account will result in removing all the data of your account.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Save WhatsApp number to local storage
            localStorage.setItem('whatsappNumber', whatsappNumber);
            Swal.fire(
                'Deleted!',
                'Account delete request will be processed.',
                'success'
            );
            location.reload();
        }
    });
});