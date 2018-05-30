/* eslint-disable */

const LinqCore = {
    noop: function(x) { return x },

    defaultComparer: function(a, b) { return (a === b) ? 0 : (a < b) ? -1 : 1; },

    ensurePredicate: function(predicate) {
      if (typeof predicate !== "function") {
        throw new Error("Argument is not predicate");
      }
    },

    buildFunction: function(clause) {
      if (typeof clause === "string") {
        if (clause.indexOf("=>") > 0) {
          var expr = clause.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
          return new Function(expr[1], "return (" + expr[2] + ")");
        }
        return new Function("x", "return (x." + clause + ")");
      }
      return clause;
    }
  }
  /* eslint-enable */