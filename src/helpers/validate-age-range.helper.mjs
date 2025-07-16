

function validateAgeRange( min, max, res ) {
    console.log( min, max );
    if( min < 0 ) 
        return res.json({ msg: 'Rango minimo no puede ser menor que cero' });
    if( max < 0 )
        return res.json({ msg: 'Rango maximo no puede ser menor que cero' });
    if ( min >= max )
        return res.json({ msg: 'Rango no permitido' });
    
    return { min, max };
}

export {
    validateAgeRange
}