function change_icon(trigger, defaultIconId, switchedIconId){
    const defaultIcon = document.getElementById(defaultIconId)
    const switchedIcon = document.getElementById(switchedIconId)
    
    if (!trigger || !defaultIcon || !switchedIcon) return;

    toggle_icon(trigger, 'mouseenter', defaultIcon, switchedIcon)
    toggle_icon(trigger, 'mouseleave', defaultIcon, switchedIcon)
}


function toggle_icon(trigger, event, defaultIcon, switchedIcon){
    trigger.addEventListener(event, () => {
        defaultIcon.classList.toggle('hidden')
        switchedIcon.classList.toggle('hidden')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('merchan-button')
    const defaultIconId = 'whatsapp-icon'
    const switchedIconId = 'arrow-icon'
    
    change_icon(trigger, defaultIconId, switchedIconId);
});