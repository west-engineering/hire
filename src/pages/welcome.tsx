export default function WelcomePage() {
    return (
        <div className={"h-[calc(100vh-30px)] flex flex-col items-center justify-center font-sans"}>
            <div>
                <div className={'text-2xl'}>
                    Добро пожаловать на интервью в компанию
                </div>
                <h5 className={"text-3xl font-bold text-blue-600"}>
                    west-engineering
                </h5>
                <div className={"mt-5"}>
                    <div className={'text-lg font-bold'}>Интервью будет состоять из</div>
                    <ul className={"list-disc ml-5 marker:text-blue-300"}>
                        <li className={""}>
                            5-и вопросов на понимание основ
                        </li>
                        <li>
                            3-х задач на JS
                        </li>
                        <li>
                            3-х задач на TS
                        </li>
                        <li>
                            задача на React
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
