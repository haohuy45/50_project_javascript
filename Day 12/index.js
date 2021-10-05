const faqs = document.querySelectorAll('.faq');

console.log(faqs)

faqs.forEach(function(faq){
    faq.addEventListener('click', function(){
        faq.classList.toggle('active')
    })
})