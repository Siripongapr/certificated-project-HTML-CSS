const displayPortfolio = () => {

    const portfolioItems = [
        '/img/Certificated/borntodev-Js.png',
    ]
    
    const portfolio = document.getElementById('portfolio-item')
    let portfolioHtml = ''
    
    portfolioItems.forEach((item) => {
        portfolioHtml+= `
        <div class="portfolio-items mb-5 col mx-auto">
            <div class="card">
                <img src="${item}" alt="portfolio-image">
            </div>
        </div>
        `
    })

    portfolio.innerHTML = portfolioHtml
}


const displayContact = () => {
    const contactItems = [
        [
        {   href: 'https://www.facebook.com/siripong.apiborrirat/',
            image: '/img/logo/facebookLogo.png',
            text: 'Facebook'
        },
        {
            href: 'https://github.com/Siripongapr',
            image: '/img/logo/githubLogo.png',
            text: 'Github'
        },
        {
            href: 'https://line.me/ti/p/e846Nm_UC5',
            image:'/img/logo/lineLogo.png',
            text: 'Line'
        },
    ],
    [
        {
            href: 'https://www.linkedin.com/in/siripong-api43/',
            image: '/img/logo/linkedinLogo.png',
            text: 'LinkedIn'
        },
        {
            href: 'https://www.instagram.com/jaysrp_/',
            image: '/img/logo/instagramLogo.png',
            text: 'Instagram'
        },
        {
            href: 'mailto:siripong.api43@gmail.com',
            image: '/img/logo/emailLogo.png',
            text: 'Email'
        }
    ]
    ]
    const divOc = 
        {
            open: `<div class="col">
            <div class="card">
                <div class="row">
                    <div class="col-4 offset-4">`,
            close: `    </div>
                    </div>
                </div>
            </div>`
        }
    
    contact = document.getElementById('about-items')
    contactHtml = ''
    contactItems.forEach((item) => {
        contactHtml += divOc.open
        item.forEach((contact) => {
                contactHtml += `<div class="p-1">
            <a href="${contact.href}" target="_blank"
            class="contact-text"> <img
                    src="${contact.image}"
                    alt="" class="contact-img";">
                ${contact.text}
            </a>
        </div>`
        })
        contactHtml += divOc.close
    })    
    contact.innerHTML = contactHtml
}
displayPortfolio()
displayContact()

