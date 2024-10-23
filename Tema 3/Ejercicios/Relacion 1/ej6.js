function potencias(n,e){
    if(e == 0){
        return 1;
    }
    else{
        return n * potencias(n, e-1);
    }
}
document.write(potencias(2,5));