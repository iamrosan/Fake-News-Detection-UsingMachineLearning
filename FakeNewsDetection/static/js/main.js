// variables
let loader = document.getElementById('loading');
let articleDiv = document.querySelector('.article-div');
let urlDiv = document.querySelector('.url-div');
let wrapp = document.querySelector('.wrapper');
let btn = document.getElementsByTagName('button');
const divvs = document.querySelectorAll('.ianimate');
let dateVar = document.querySelector('#yearSpan');
// let conditionss ={
//     threshold: 1,
// }

function loadFunction(){
    loader.style.display='none';
}

console.log(btn)
function toggleContent(num){
    if(num==0){
        articleDiv.style.display = 'block';
        urlDiv.style.display = 'none';
        btn[1].style.backgroundColor ='red';
        btn[2].style.backgroundColor ='white';

    }else{
        articleDiv.style.display = 'none';
        urlDiv.style.display = 'block';
       wrapp.style.width = '40%';
       btn[1].style.padding ='3px';
       btn[2].style.padding ='3px';
       btn[2].style.backgroundColor ='red';
       btn[1].style.backgroundColor ='white';
    }
}

//Year
let dateJs = new Date();
let currentYear = dateJs.getFullYear();
dateVar.innerText = currentYear;

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        // console.log(entry);
        entry.target.classList.toggle("show",entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    threshold:1,
});

// const observer = new IntersectionObserver(
//     function(entries, observer){
//         entries.forEach(entry=>{
//             if(!entry.isIntersecting){
//                 return;
//             }else{
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             }
//         });
        
//     }
//     ,conditionss);


    divvs.forEach(divv=>{
        observer.observe(divv);
    })