const decodeTheRing = function (m, p) {
    const m = message.length;
    const p = pattern.length;
    const dp = Array(m + 1).fill(false).map(() => Array(p + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= p; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]; 
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= p; j++) {
            if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]; 
            } else if (pattern[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; 
            }
        }
    }

    return dp[m][p];
}
console.log(isMatch("aa", "a"));       
console.log(isMatch("aa", "*"));      
console.log(isMatch("cb", "?a"));      
console.log(isMatch("adceb", "*a*b"));  
console.log(isMatch("acdcb", "a*c?b")); 
ode here

  };
