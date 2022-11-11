const tg = window.Telegram.WebApp;

export function telegram() {

    const onclose = ()=>{
        tg.close()
    }

    const ontogglebutton=()=>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        tg,
        onclose,
        ontogglebutton,
        user:initDataUnsafe?.user
    }
    
}