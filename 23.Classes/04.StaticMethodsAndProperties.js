class Point {
    static DisplayName = "Point"
    static Distance(a,b){
        return Math.abs(a-b);
    }
}

const myPoint = new Point;
console.log(myPoint.Displayname);
console.log(Point.DisplayName);