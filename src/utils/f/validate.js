/**
 * @param 
 */


const up = f => either => {
    if (either.way === 'left') {
        return either
    }
    if (either.way === 'right') {
        let result = f(either.value)
        if (result === true) {
            return either;
        } else {
            either.error = result;
            either.way = 'left';
            return either;
        }
    }
};


validataList.map(up).reduce((a, b) => b(a), {
    way: 'right',
    error: '',
    value: value
})

export default function(val,validateList){
    
}