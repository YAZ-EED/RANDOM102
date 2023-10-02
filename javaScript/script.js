let stagiaires = ['Chaimae', 'Lachhab', 'FOUFA', 'SOMALI', 'BARBOUCHA', 'SBAI', 'AYACHI',
    'ABBASSI', 'ZEDAGHI', 'ESSOKTANI', 'GAZZARI', 'ELASRI', 'BOUTAYEB', 'ELHOUSSNI', 'ABOUZIA',
    'SAKI', 'Zaraoui', 'Mehdaoui', 'Aidi', 'Bouras', 'Zeghli', 'Elgass']
let btn = document.querySelector('section > button')
let btns = document.querySelectorAll('div > button')
let h1 = document.querySelector('h1')
let a;
let b;
let c;
let res;
let k;
let l;

function createH1(text) {

    h1 = document.createElement('h1')
    let span1 = document.createElement('span')

    let pResValue1 = document.createElement('p')
    let pResValue2 = document.createElement('p')
    let pResValue3 = document.createElement('p')

    let z = localStorage.note.split(',')
    z.forEach(e => {
        n = e.split('-')
        if (n[0] == text) {
            let textDiv1 = document.createTextNode(n[1])
            let textDiv2 = document.createTextNode(n[2])
            let textDiv3 = document.createTextNode(n[3])
            pResValue1.appendChild(textDiv1)
            pResValue2.appendChild(textDiv2)
            pResValue3.appendChild(textDiv3)
        }
    })

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')

    let pRes1 = document.createElement('p')
    let pRes2 = document.createElement('p')
    let pRes3 = document.createElement('p')

    let textPRes1 = document.createTextNode('Oui')
    let textPRes2 = document.createTextNode('Ok')
    let textPRes3 = document.createTextNode('Non')

    pRes1.appendChild(textPRes1)
    pRes2.appendChild(textPRes2)
    pRes3.appendChild(textPRes3)

    div1.appendChild(pRes1)
    div1.appendChild(pResValue1)
    div2.appendChild(pRes2)
    div2.appendChild(pResValue2)
    div3.appendChild(pRes3)
    div3.appendChild(pResValue3)

    span1.appendChild(div1)
    span1.appendChild(div2)
    span1.appendChild(div3)
    h1.appendChild(span1)
    let textH1 = document.createTextNode(text)
    h1.appendChild(textH1)
    h1.setAttribute('value', `${text}`)
    return h1
}

btn.onclick = () => {
    btns.forEach(e => {
        e.style.display = 'block'
    })
    btn.innerText = 'Autre'
    if (localStorage.stagiairesAffi == undefined || localStorage.stagiairesAffi == '') {
        localStorage.stagiairesAffi = stagiaires
        b = localStorage.stagiairesAffi.split(',')
        a = parseInt(Math.random() * b.length)

        localStorage.stagiairesAffi.split(',').forEach(e => {
            section3 = document.querySelector('body > article > section:last-of-type')
            section3.appendChild(createH1(e))
        });

        stag = document.querySelector(`body > article > section:last-of-type [value="${b[a]}"]`)
        p = document.querySelector('body > article > section:nth-of-type(2) p')
        p.innerHTML = b[a]
        p.value = b[a]
        stag.remove()

        let stagiairesPass = [b[a]]
        localStorage.stagiairesPass = stagiairesPass

        h1 = document.querySelectorAll('body > article > section:first-of-type h1')
        h1.forEach(e => {
            e.remove()
        })

        section1 = document.querySelector('body > article > section:first-of-type')
        section1.appendChild(createH1(b[a]))

        b.splice(a, 1)
        localStorage.stagiairesAffi = b
    } else {
        b = localStorage.stagiairesAffi.split(',')
        a = parseInt(Math.random() * b.length)
        stag = document.querySelector(`body > article > section:last-of-type [value="${b[a]}"]`)
        p = document.querySelector('body > article > section:nth-of-type(2) p')
        p.innerHTML = b[a]
        p.value = b[a]
        stag.remove()

        c = localStorage.stagiairesPass.split(',')
        c.push(b[a])
        localStorage.stagiairesPass = c
        section = document.querySelector('body > article > section:first-of-type')
        section.appendChild(createH1(b[a]))

        b.splice(a, 1)
        localStorage.stagiairesAffi = b
    }

}

if (localStorage.stagiairesAffi != undefined && localStorage.stagiairesAffi != '') {
    localStorage.stagiairesAffi.split(',').forEach(e => {
        section = document.querySelector('body > article > section:last-of-type')
        section.appendChild(createH1(e))
    });
}

if (localStorage.stagiairesPass != undefined && localStorage.stagiairesPass != '') {
    localStorage.stagiairesPass.split(',').forEach(e => {
        section = document.querySelector('body > article > section:first-of-type')
        section.appendChild(createH1(e))
    });
}
if (localStorage.note == undefined) {
    localStorage.note = ['Chaimae-0-0-0', 'Lachhab-0-0-0',
        'FOUFA-0-0-0', 'SOMALI-0-0-0', 'BARBOUCHA-0-0-0', 'SBAI-0-0-0',
        'AYACHI-0-0-0', 'ABBASSI-0-0-0', 'ZEDAGHI-0-0-0',
        'ESSOKTANI-0-0-0', 'GAZZARI-0-0-0', 'ELASRI-0-0-0',
        'BOUTAYEB-0-0-0', 'ELHOUSSNI-0-0-0', 'ABOUZIA-0-0-0',
        'SAKI-0-0-0', 'Zaraoui-0-0-0', 'Mehdaoui-0-0-0',
        'Aidi-0-0-0', 'Bouras-0-0-0', 'Zeghli-0-0-0',
        'Elgass-0-0-0']
}
btns.forEach(e => {
    e.addEventListener('click', () => {
        res = e.value
        p = document.querySelector('body > article > section:nth-of-type(2) p').value
        notes = localStorage.note.split(',')
        let index;
        let fin;
        notes.forEach(r => {
            let stagiaire = r.split('-')
            if (stagiaire[0] == p) {
                index = notes.indexOf(r)
                if (res == 'oui') {
                    stagiaire[1] = +stagiaire[1] + 1
                    location.reload()
                }
                if (res == 'ok') {
                    stagiaire[2] = +stagiaire[2] + 1
                    location.reload()
                }
                if (res == 'non') {
                    stagiaire[3] = +stagiaire[3] + 1
                    location.reload()
                }
                fin = stagiaire.join('-')
            }
        })
        notes[index] = fin
        localStorage.note = notes
        if (res == 'ab') {
            let a = localStorage.stagiairesPass.split(',')
            let b = localStorage.stagiairesAffi.split(',')
            let c = a.pop()
            localStorage.stagiairesPass = a
            b.push(c)
            localStorage.stagiairesAffi = b
            location.reload()
        }
    })
})
img1 = document.querySelector('img:last-of-type')
img2 = document.querySelectorAll('img:not(:nth-of-type(3))')
img1.onclick = () => {
    img1.classList.toggle('imgRotate')
    let i = 0
    img2.forEach(e => {
        e.classList.toggle('imgTransform')
        i++
        if (i == 1) {
            e.addEventListener('click', () => {
                console.log(6)
            })
        } else {
            e.addEventListener('click', () => {
                localStorage.clear()
                location.reload()
            })
        }
    })
} 
let div1 = document.querySelector('.divMenu1');
let div2 = document.querySelector('.divMenu2');
let sections = document.querySelectorAll("section");
div1.onclick = () => {
    div1.classList.toggle('showMenu');
    sections[0].classList.toggle("showFirstSection");
}
div2.onclick = () => {
    div2.classList.toggle('showMenu');
    sections[2].classList.toggle("showLastSection");
}