// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let distance = Math.abs(value - 42)
    return distance
}

function distanceFromHqInFeet(value) {
    let distance = distanceFromHqInBlocks(value) * 264
    return distance
}

function distanceTravelledInFeet(start, end) {
    let distance = Math.abs(end-start)*264
    return distance
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start,end)
    let cost
    if (distance <= 400) {
        cost = 0
        return cost
    } else if (distance < 2000) {
        cost = (distance-400)* 0.02
        return cost
    } else if (distance <2500) {
        cost = 25
        return cost
    } else {
        return "cannot travel that far"
    }
}