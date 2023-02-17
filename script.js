// async function output(data) {
//     const $ = document.querySelector.bind(document)
//     let output = '<nav><ul>'
//     for (const key in data) {
//         output +=`<li><a class="bi-${key}" href="${data[key]}"> ${key}</a>`
//     }
//     output +='</ul></nav>'
//     $('#output').innerHTML = output
// }

// async function getSocial() {
//     const res = await fetch('./social.json')
//     const data = await res.json()
//     return data
// }

// async function doSocial() {
//     const social = await getSocial()
//     await output(social)
// }

// doSocial();

info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  }
}

function listObject(data) {
    
}

listObject(info.social)