const form = document.forms.visitCard;
const res = document.querySelector('.res')

form.addEventListener ('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData (ev.target);
    const fName = formData.get('f-name');
    const lName = formData.get('l-name');
    const mName = formData.get('m-name');
    const file = formData.get('file');


    const html = `
        <div>
            <div>Firstname: ${fName}</div>
            <div>Lastmane: ${lName}</div>
            <div>Midlname: ${mName}</div>
            <div><img src=""></div>
        </div>
    `;
    

    res.insertAdjacentHTML('afterBegin', html);
    const el = res.querySelector(':last-child');
    const reader = new FileReader();
    reader.onload = (ev) => {
        const {result} = ev.target;
        el.querySelector('img').src = result;
        
    };

    reader.readAsDataURL(file);

    document.forms['visitCard'].reset();
    

});
