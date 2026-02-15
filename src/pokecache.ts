
export type CacheEntry<T>= {
    createdAt: number;
    val: T;
}
export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    constructor(interval: number) {
        
        this.#interval = interval;
        this.#startReapLoop(this.#interval);
    };
    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val
        });

    };
    get<T>(key: string): T | undefined {
        const result = this.#cache.get(key);
        if (!result) {
            return undefined;
        }
        return result.val as T;
  };
  #reap(){
    for(const [key, entry] of this.#cache.entries()){
        if(Date.now() - this.#interval >= entry.createdAt){
            this.#cache.delete(key);
        }
    }
  };
  #startReapLoop(interval: number){
    const id = setInterval(() => {this.#reap()}, interval);
    this.#reapIntervalId = id;
  };
  stopReapLoop(){
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  };
}