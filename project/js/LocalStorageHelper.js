export class LocalStorageHelper {
    constructor(zipCodeArray) {
        this.zipCodeArray = zipCodeArray;
        this.itemKey = "zipCodes";
    }

    getItemKey() { return this.itemKey; }

    saveZipCodes() {
        localStorage.setItem(this.itemKey, JSON.stringify(this.zipCodeArray));
    }

    getZipCodes() {
        if (localStorage.getItem(this.itemKey)) {
            try {
                let retrievedData = localStorage.getItem(this.itemKey);
                let retrivedZipCodes = JSON.parse(retrievedData);
                console.log("retrivedZipCodes: " + retrivedZipCodes.toString());
                this.zipCodeArray = retrivedZipCodes;
                console.log("zipCodeArray after localStorage: " + this.zipCodeArray.toString());
                return this.zipCodeArray;
            } catch (e) {
                return [];
            }

        }
        else {
            return [];
        }
    }
}