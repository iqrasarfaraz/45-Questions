var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manfacture, model, optional) {
    return __assign({ manfacture: manfacture, model: model }, optional);
}
var myCar = createCar('toyota', 'corolla', { color: 'red', year: 2024 });
console.log(myCar);
