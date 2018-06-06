class QuickSortIteractive {
    changeIndex(vector, i, j) {
        let value = vector[i];
        vector[i] = vector[j];
        vector[j] = value;
    }
    init(vector) {
        this.init = new Date();
        this.execute(vector, 0, vector.length - 1);
        return this.end();
    }
    execute(vector, start, end) {
        let aux = [];
        let top = -1;
        aux[ ++top ] = start;
        aux[ ++top ] = end;

        while ( top >= 0 ) {
            end = aux[ top-- ];
            start = aux[ top-- ];

            let pivot = this.partition( vector, start, end );
            if ( pivot - 1 > start ) {
                aux[ ++top ] = start;
                aux[ ++top ] = pivot -1;
            }
            if ( pivot + 1 < end ) {
                aux[ ++top ] = pivot + 1;
                aux[ ++top ] = end;
            }
        }
    }
    end() {
        this.end = new Date();
        return new Timed( this.init, this.end );
    }
    partition( vector, start, end ) {
        let x = vector[end];
        let j;
        let i = (start - 1);
     
        for ( j = start; j <= end - 1; j++ ) {
            if (vector[j] <= x) {
                i++;
                this.changeIndex(vector, i, j);
            }
        }
        this.changeIndex( vector, i + 1, end );
        return (i + 1);
    }
}

class QuickSortRecursive {
    changeIndex(vector, i, j) {
        let value = vector[i];
        vector[i] = vector[j];
        vector[j] = value;
    }
    init(vector) {
        this.init = new Date();
        this.execute(vector, 0, vector.length - 1);
        return this.end();
    }
    execute(vector, left, right) {
        if ( left < right ) {
            let pivot = Math.trunc(( left + right ) / 2);
            let pos = this.partition( vector, left, right, pivot );
            this.execute( vector, left, pos - 1 );
            this.execute( vector, pos + 1, right );
        }
    }
    end() {
        this.end = new Date();
        return new Timed( this.init, this.end );
    }
    partition(vector, left, right, pivot) {
        let pos, i;
        this.changeIndex( vector, pivot, right );
        pos = left;
        for ( i = left; i < right; i++ ) {
            if ( vector[i] < vector[right] ) {
                this.changeIndex(vector, i, pos);
                pos++;
            }
        }
        this.changeIndex( vector, right, pos );
        return pos;
    }
}

class QuickSortRandom {
    init() {
        this.init = new Date();
        this.execute();
        return this.end();
    }
    execute() {
        this.end();
    }
    end() {
        this.end = new Date();
        return new Timed( this.init, this.end );
    }
}

class Timed {
    constructor(init, final) {
        this.init = init;
        this.final = final;
        this.runned = final.getTime() - init.getTime();
    }
}

class Vectors {
    static createVectors( length, vectorsNumber ) {
        console.log("[INFO] Creating the vectors...")
        const vectors = [];
        for (let i = 0; i < vectorsNumber; i++) {
            const vector = [];
            vectors.push( vector );
        }
        for ( let i = 0; i < length; i++ ) {
            const value = Math.trunc(Math.random() * 50000);
            for (let j = 0; j < vectorsNumber; j++) {
                const vector = vectors[j];
                vector.push( value );
            }       
        }
        console.log("[INFO] Done...")
        return vectors;
    }
}

const times = { quickSortIteractive: [], quickSortRecursive: [], quickSortRandom: [] };
let length = 15000;
let max = 100;

for ( let i = 0; i < max; i++ ) {
    console.log("[INFO] " + i + " of " + max)
    const vectors = Vectors.createVectors( length, 3 );
    let quickSortIteractive = new QuickSortIteractive();
    let quickSortRecursive = new QuickSortRecursive();
    let quickSortRandom = new QuickSortRandom();
    console.log("[INFO] Executing the QuickSortIteractive...");
    let timedInt = quickSortIteractive.init( vectors[0])
    console.log("[INFO] Executed in:" + timedInt.runned);
    console.log("[INFO] Executing the QuickSortRecursive...");
    let timedRec = quickSortRecursive.init( vectors[1]);
    console.log("[INFO] Executed in:" + timedRec.runned + "\n");

    times.quickSortIteractive.push({length: length, runned: timedInt.runned})
    times.quickSortRecursive.push({length: length, runned: timedRec.runned})
    length += 10000;
    delete vectors ;
}