export const Settings = [
    {
        name: 'lang-select'
    }
];
export function createSettingView(options) {
    const langSelectorWrapperEl = document.createElement('div');
    const langSelectorEl = document.createElement('select');
    langSelectorWrapperEl.classList.add('components-codeblock-setting');
    langSelectorWrapperEl.appendChild(langSelectorEl);
    const langs = options.langs
        .map(lang => {
        const alias = lang.alias[0] || lang.name.toLowerCase();
        return {
            label: alias,
            value: alias
        };
    })
        .sort((a, b) => (a.value > b.value ? 1 : -1));
    langs.forEach(lang => {
        const optionEl = document.createElement('option');
        optionEl.text = lang.label;
        optionEl.value = lang.value;
        langSelectorEl.appendChild(optionEl);
    });
    langSelectorEl.addEventListener('change', handleLangChange);
    function handleLangChange() {
        options.onLangChange(langSelectorEl.value);
    }
    return {
        wrapperEl: langSelectorWrapperEl,
        update(node) {
            langSelectorEl.value = node.attrs.language;
        },
        destory() {
            langSelectorEl.removeEventListener('change', handleLangChange);
        }
    };
}
export function renderSetting() { }
