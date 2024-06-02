function FormSuccessMordal({ handleClose }) {
    return (
        <div className="bg-white fixed top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2 px-24 py-12 rounded-lg">
            <div className="close_icon">
                <i
                    onClick={handleClose}
                    className="fa-solid fa-xmark fa-2x cursor-pointer"
                ></i>
            </div>
            <p className="text-xl font-bold text-center mb-6">送信が完了しました。</p>
            <p className="text-lg">お問い合わせいただき、ありがとうございます。</p>
        </div>
    );
}

export default FormSuccessMordal;
