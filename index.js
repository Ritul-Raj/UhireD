const user_con=document.querySelector('.user-container');
const regist_btn=document.querySelector('.registration_btn');
const login_btn=document.querySelector('.login_btn');

regist_btn.addEventListener('click',()=>{
    user_con.classList.add('login_section_display')
})

login_btn.addEventListener('click',()=>{
    user_con.classList.remove('login_section_display')
})


