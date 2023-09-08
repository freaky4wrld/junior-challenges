const attentionSeeker = document.getElementById('notifications-header').firstElementChild;
attentionSeeker.classList.add('animate__animated','animate__bounce', 'animate__repeat-2','animate__fast');

const allPosts = document.getElementById('posts-all');
const markReadBtn = document.getElementById('mark-read');
attentionSeeker.addEventListener('click',()=>{
    showNotificationContent();
    addAnimations();
})
const unreadNotification = document.querySelectorAll('.unread');
const unreadIcon = document.querySelectorAll('.new-icon');

unreadNotification.forEach((notification)=>{
    notification.addEventListener('click',()=>{
        notification.classList.remove('bg-lightGrayishBlue1');
        notification.classList.add('bg-White');
    })
})

markReadBtn.addEventListener('click',()=>{
    unreadNotification.forEach((unread)=>{
        unread.classList.remove('bg-lightGrayishBlue1');
        unread.classList.add('bg-White');
    });
    removeIcon();
})

function removeIcon(){
    unreadIcon.forEach((icon)=>{
        icon.classList.add('hidden');
    })
}

function showNotificationContent(){
    allPosts.classList.remove('hidden');
    allPosts.classList.add('flex')
    markReadBtn.classList.remove('hidden');
}

function addAnimations(){
    allPosts.classList.add('animate__animated','animate__fadeInDown','animate__fast');
    markReadBtn.classList.add('animate__animated','animate__flipInX','animate__delay-2s')
}