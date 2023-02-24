const text = document.querySelector('textarea');
const button = document.querySelector('button');

text.focus();

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(!(text.value.trim() === '')) {
    const message = text.value.trim();   
    const msg = document.createElement('div');
    msg.classList.add('sent');
    msg.textContent = text.value;
    document.querySelector('.inputgroup').before(msg);
    text.value = '';

    fetch(`https://corsproxy.io/?http://api.brainshop.ai/get?bid=172002&key=WzDHnNNnSFl5HQRc&uid=[uid]&msg=${message}`)
        .then(response => response.json())
        .then(data => {
            const p = document.createElement('p');
            p.textContent = data.cnt;
            const div = document.createElement('div');
            div.classList.add('text');
            div.appendChild(p);
            document.querySelector('.inputgroup').before(div);
    document.querySelector('.inputgroup').scrollIntoView();

        }).catch(err => {
            console.log(err);
        });
        
    document.querySelector('.inputgroup').scrollIntoView();
    text.focus();
    }
    }
);