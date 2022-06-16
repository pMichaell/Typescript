type Color = "Black" | "White";
type RankLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  //private will assign automatically rankLetter parameter as this.rankLetter = rankLetter
  // and set it to private
  constructor(private rankLetter: RankLetter, private rank: Rank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      rankLetter: Math.abs(
        position.rankLetter.charCodeAt(0) - this.rankLetter.charCodeAt(0)
      ),
    };
  }
}

//assigning parameters to constructor with access modifier name, will assign them
//automatically with this.parameterName

//abstract to disallow creating Piece directly
abstract class Piece {
  protected position: Position;

  constructor(
    //mark as readonly, so it can't change
    private readonly color: Color,
    rankLetter: RankLetter,
    rank: Rank,
    public name: string
  ) {
    this.position = new Position(rankLetter, rank);
  }

  //by default methods are public
  moveTo(position: Position) {
    this.position = position;
  }

  take(position: Position) {
    this.position = position;
  }

  //abstract do not have body, they must be implemented in subclasses
  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.rankLetter < 2;
  }

  take(position: Position) {
    //using super the parent class implementation of the method will be used
    super.take(position);
  }
}

const blackKing = new King("Black", "E", 8, "brad");
console.log(blackKing.name);

class Game {}

export {};
