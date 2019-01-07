export interface GameState{
    history :SquaresStatus[],
    XisNext:boolean;
    stepNumber:number;
}

interface SquaresStatus{
    squares:string[];
}