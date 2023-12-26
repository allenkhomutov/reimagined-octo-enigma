function coinflip() {
   let y = Math.random()
    if (y < 0.5)    {
        return heads
    }
    else {
        return tails
    }   
}
let x = coinflip()
console.log(x)

