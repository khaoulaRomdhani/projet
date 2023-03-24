export function getStylesFromString(stylesString){
    const styles={};
    stylesString.split(';').forEach(style=>{
        const [key , value]=style.split(':');
        if(key &&value){
            styles[key.trim()]=value.trim();
        }
    });
    return styles;
}