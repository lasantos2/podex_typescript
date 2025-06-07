
export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoo();
    }

    #startReapLoo() {
        this.#reapIntervalId = setInterval(() => this.#reap, this.#interval);
    }

    #reap() {

        console.log("In #reap");
        this.#cache.forEach(
            (value, key) => {
                if (value.createdAt <= (Date.now() - this.#interval)) {
                    this.#cache.delete(key);
                    console.log("Got deleted");
                }
            }
        )
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }

    add<T>(key: string, val: T) {

        if (this.#cache.has(key)) return;

        let entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val,
        };
        this.#cache.set(key, entry);
    }

    get<T>(key: string): any | undefined {

        return this.#cache.get(key);
    }
}