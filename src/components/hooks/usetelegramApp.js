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
        onclose,
        tg,
        ontogglebutton,
        user:"tg.initDataUnsafe?.user"
    }
    
}