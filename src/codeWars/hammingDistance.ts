const hammingDistance = (stringA: string, stringB: string): number => {
    let results = 0;
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) results++
    }
    return results
}

console.log(hammingDistance("I like turtles", "I like turkeys")) // 3