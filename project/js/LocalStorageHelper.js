export class LocalStorageHelper {
    constructor(zipCodeArray) {
        this.zipCodeArray = zipCodeArray;
        this.itemKey = "zipCodes";
    }

    saveZipCodes() {
        localStorage.setItem(this.itemKey, JSON.stringify(this.zipCodeArray));
    }

    getZipCodes() {
        if (localStorage.getItem(this.itemKey)) {
            try {
                let retrievedData = localStorage.getItem(itemKey);
                let retrivedZipCodes = JSON.parse(retrievedData);
                console.log("retrivedZipCodes: " + retrivedZipCodes.toString());
                zipCodeArray = retrivedZipCodes;
                console.log("zipCodeArray after localStorage: " + zipCodeArray.toString());
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