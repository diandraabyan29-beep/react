function IfELseDemo (){
    const isLogin = true;
    let message;
    
    if(isLogin){
        message = <h3>Kamu Sudah Login</h3>
    }else{
        message = <h3>Kamu Belum Login</h3>
    }

    return<div>{message}</div>
}

export default IfELseDemo;