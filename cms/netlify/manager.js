import { getMixins } from './mixins'

class Manager {
  constructor(axios) {
    this.slug = 'manager'
    this.slugPlural = 'managers'
    this.pretty = 'Manager'
    this.plural = 'Managers'
    this.axios = axios
    this.editUrl = '/admin/#/collections/managers/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Manager.prototype, getMixins)

export default Manager
