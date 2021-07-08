import { getRandomString } from 'utils/functions'

export class BaseItem {
    parseSnapshot(snapshot) {
        if (snapshot instanceof Object) {
            Object.entries(snapshot).forEach(([key, value]) => {
                this[key] = value;
            })
        }
        if (!this.id) {
            this.id = getRandomString(16)
        }
    }
}