const btn = document.querySelectorAll('.button');
const bdy = document.querySelector('body');


btn.forEach((bt) => {
    //  console.log(bt)
    bt.addEventListener('click', (e) => {
        let color = e.target.id;

        switch (color) {
            case "grey":
                    bdy.style.backgroundColor = e.target.id;

                break;
            case "white":
                    bdy.style.backgroundColor = e.target.id;
                    document.querySelector('h2').style.color = "black"
                    document.querySelector('h1').style.color = "black"
                break;
                 case "blue":
                    bdy.style.backgroundColor = e.target.id;

                break; case "yellow":
                    bdy.style.backgroundColor = e.target.id;

                break;
            default:
                bdy.style.backgroundColor = "#212121"

                break;
        }

    })
})