import { BaseItem } from 'models/base'

export class Task extends BaseItem {
    constructor(snapshot) {
        super();
        this.userId = null;
        this.id = null;
        this.title = '';
        this.completed = false;
        this.timestamp = Date.now();
        this.parseSnapshot(snapshot);
    }
    
    update(snapshot) {
        this.parseSnapshot(snapshot)
        return this
    }

}