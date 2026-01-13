function TernaryAndDemo(){
    const isLogin = false
    const notif = 3

    return(
        <>
            <div>
                <p>{isLogin ? 'Kamu Sudah Login' : 'Kamu Belum Login'}</p>

                {notif > 0 && (<p>Kamu memiliki {notif} notifikasi!</p>)}
            </div>
        </>
    )

}

export default TernaryAndDemo;