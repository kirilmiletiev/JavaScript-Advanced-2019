(() => {
     add = (v1, v2) =>
     [Number(v1[0] + v2[0]), Number(v1[1] + v2[1])];

     multiply = (v1, scalar) =>
     [(v1[0] * scalar), (v1[1] * scalar)];

     length = (v) =>
     Math.sqrt((v[0] * v[0]) + (v[1] * v[1]));

     dot = (v1, v2) =>
         Number((v1[0] * v2[0]) + (v1[1] * v2[1]));

     cross = (v1, v2) =>
         Number((v1[0] * v2[1]) - (v1[1] * v2[0]));

    return {add, multiply, length, dot, cross};

})();