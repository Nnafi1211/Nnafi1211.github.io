

const btn_toggle = document.querySelector('.nav-toggle');
const links_container = document.querySelector('.links-container');
const nav = document.querySelector('.nav');
const nav_center = document.querySelector('.nav-center');
const to_top_link = document.querySelector('.top-link');
const scroll_links = document.querySelectorAll('.scroll-link');
const cv = document.querySelector('.btn-cv');
const date = document.getElementById('date');
const logo = document.getElementById('logo');

cv.addEventListener('click', function(){
    alert("Sorry! No Cv available.");
})
// Nav Bar Setting
btn_toggle.addEventListener('click', function(){
    nav.classList.toggle('nav-height-adjust');
    links_container.classList.toggle('show-links');
   
});

//fixing Nav bar
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav_center.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav');
        logo.src = 'img/nn.png';
    }
    else{
        nav.classList.remove('fixed-nav');
        logo.src = 'img/nn-white.png';
    }

    if(scrollHeight > 500)
        to_top_link.classList.add('show-top-link');
    else
        to_top_link.classList.remove('show-top-link');
});

// Scroll Screen Fix
scroll_links.forEach(function(link){
    link.addEventListener('click', function(e){
        //prevent default
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        
        const containerHeight = links_container.getBoundingClientRect().height;
        let navHeight = nav.getBoundingClientRect().height;

        if(navHeight > 90.34)
            navHeight = 90.34;

        let position = element.offsetTop - navHeight;

        if(navHeight > 100){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        })
        if(nav.classList.contains('nav-height-adjust'))
            nav.classList.remove('nav-height-adjust');
        if(links_container.classList.contains('show-links'))
            links_container.classList.remove('show-links');
    });
});

// About section 

const btns = document.querySelectorAll('.tab-btn');
const about =  document.querySelector('.about')
const articles = document.querySelectorAll('.content');


about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach(function(article){
            article.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

const btn_submit = document.querySelector('.btn-submit');

btn_submit.addEventListener('click', function(){
    alert("Thank you for your message!");
});
