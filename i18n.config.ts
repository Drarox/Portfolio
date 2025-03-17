import fr from './locales/fr_FR.json'
import en from './locales/en_US.json'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'en',
    messages: { fr, en }
}))
