const themes = [
    {
        name: "Purple",
        message: "Luscious purples, the color of royalty"
    },
    {
        name: "Green",
        message: "Verdant greens, the color of nature"
    },
    {
        name: "Brown",
        message: "Rich browns, the color of the earth"
    }
];

const themeSwitcherBtn = document.getElementById('theme-switcher-button');
const dropDown = document.getElementById('theme-dropdown');
const themesSelect = document.querySelectorAll('[role="menuitem"]');
const message = document.getElementById('status-message');

themeSwitcherBtn.addEventListener('click', () => {
    if(dropDown.hidden === true){
        dropDown.hidden = false;
        themeSwitcherBtn.setAttribute('aria-expanded', true);
    } else {
        dropDown.hidden = true;
        themeSwitcherBtn.setAttribute('aria-expanded', false)
    }
});

themesSelect.forEach(theme => {
    theme.addEventListener('click', (e) => {
        const selectedTheme = e.target.textContent.trim();

        document.body.classList.forEach(cls => {
            if(cls.startsWith('theme-')){
                document.body.classList.remove(cls);
            }
        })
        const themeClass = `theme-${selectedTheme.toLowerCase()}`;
        document.body.classList.add(themeClass)

        const displayTheme = themes.find(t => t.name === selectedTheme);
        message.textContent = displayTheme.message

        dropDown.hidden = true;
        themeSwitcherBtn.setAttribute('aria-expanded', 'false');
    })
})