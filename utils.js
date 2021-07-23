const getMean = (arrNumbers) => {
    if (arrNumbers.length === 0) {
      console.log('Array contains no element. No mean in the list.')
      return undefined
    }
    return (arrNumbers.reduce((acc, curr) => acc + curr, 0) / arrNumbers.length).toFixed(2)
}

const getMedian = (arrNumbers) => {
    if (arrNumbers.length === 0) {
      console.log('Array contains no element. No meadian in the list.')
      return
    }
    const sortedNumbers = [...arrNumbers].sort((a, b) => a - b)
    return sortedNumbers.length % 2 === 0 ? ((sortedNumbers[sortedNumbers.length / 2] + sortedNumbers[sortedNumbers.length / 2 - 1]) / 2).toFixed(2) : sortedNumbers[(sortedNumbers.length - 1) / 2].toFixed(2)
}

const getMode = (arrNumbers) => {
    if (arrNumbers.length === 0) {
      console.log('Array contains no element. No mode in the list.')
      return undefined
    }
    const repeatResult = {}
    let highestRepeat = 0
    for (let num of arrNumbers) {
        if (repeatResult[num]) {
            repeatResult[num] = repeatResult[num] + 1
        } else {
            repeatResult[num] = 1
        }
    }
    Object.values(repeatResult).forEach(item => {
        if (item > highestRepeat) {
            highestRepeat = item;
        }
    })
    if (Object.values(repeatResult).every(count => count === 1)) {
      console.log('There is no mode in the list because no number in the list is repeated')
      return undefined
    }
    return Object.entries(repeatResult).filter(([_, value]) => value === highestRepeat).map(([key, _]) => Number (key))
}   

module.exports.getMean = getMean;
module.exports.getMedian = getMedian;
module.exports.getMode = getMode;