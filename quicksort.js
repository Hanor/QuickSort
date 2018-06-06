export class QuickSortIteractive {
    init;
    end;
    changeIndex(vector, i, j) {
        let value = vector[i];
        vector[i] = vector[j];
        vector[j] = value;
    }
    init(vector, length) {
        this.init = new Date();
        this.execute(vector, 0, length);
        this.end();
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
        let x = arr[h];
        let j;
        let i = (start - 1);
     
        for ( j = start; j <= end - 1; j++ ) {
            if (vector[j] <= x) {
                i++;
                changeIndex(vector, i, j);
            }
        }
        changeIndex( vector, i + 1, end );
        return (i + 1);
    }
}

export class QuickSortRecursive {
    init;
    end;
    changeIndex(vector, i, j) {
        let value = vector[i];
        vector[i] = vector[j];
        vector[j] = value;
    }
    init(vector, length) {
        this.init = new Date();
        this.execute(vector, 0, length);
        this.end();
    }
    execute(vector, left, rigth) {
        if ( left < rigth ) {
            let pivot = ( left + rigth ) / 2;
            let pos = this.partition( vector, left, rigth, pivot );
            this.execute( vector, left, pos - 1 );
            this.execute( vector, pos + 1, rigth );
        }
    }
    end() {
        this.end = new Date();
        return new Timed( this.init, this.end );
    }
    partition(vector, left, rigth, pivot) {
        let pos, i;
        this.changeIndex( vector, pivot, rigth );
        pos = left;
        for ( i = left; i < rigth; i++ ) {
            if ( vector[i] < vector[rigth] ) {
                this.changeIndex(vector, i, pos);
                pos++;
            }
        }
        this.changeIndex( vector, rigth, pos );
        return pos;
    }
}

export class QuickSortRandom {
    init;
    end;
    init() {
        this.init = new Date();
        this.execute();
        this.end();
    }
    execute() {
        this.end();
    }
    end() {
        this.end = new Date();
        return new Timed( this.init, this.end );
    }
}

export class Timed {
    init;
    final;
    runned;
    
    constructor(init, final) {
        this.init = init;
        this.final = final;
        this.runned = final - init;
    }
}

const times = {
    quickSortIteractive: [],
    quickSortRecursive: [],
    quickSortRandom: []
};
const quickSortIteractive = new QuickSortIteractive();
const quickSortRecursive = new QuickSortRecursive();
const quickSortRandom = new QuickSortRandom();

