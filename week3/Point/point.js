function MutablePoint (x, y, z) {
    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.getZ = function() {
        return z;
    };
    this.move = function(dx, dy, dz) {
        x += dx;
        y += dy;
        z += dz;
    }
};
MutablePoint.prototype.toString = function() {
    console.log("({%s}, {%s}, {%s})", this.getX(), this.getY(), this.getZ());
};
function ImmutablePoint (x, y, z) {
    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
    this.getZ = function() {
        return z;
    };
    
};
ImmutablePoint.prototype.move = function(dx, dy, dz) {
   return new ImmutablePoint(this.getX()+dx, this.getY()+dy, this.getZ()+dz) 
}
ImmutablePoint.prototype.toString = function() {
    console.log("({%s}, {%s}, {%s})", this.getX(), this.getY(), this.getZ());
};
var point = new ImmutablePoint(0,0,0);
point = point.move(1,2,5);
point.toString();